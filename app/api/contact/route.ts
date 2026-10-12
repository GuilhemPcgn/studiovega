export const runtime = 'nodejs';

import { Resend } from 'resend';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/rate-limit';
import { buildConfirmationEmail, buildInternalEmail } from '@/lib/contact-mail';

// Vérifier si la clé API est disponible
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const INTERNAL_RECIPIENT = 'contact@studiovega.dev';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || INTERNAL_RECIPIENT;
const CONTACT_RESPONSE_DELAY = process.env.CONTACT_RESPONSE_DELAY || '48 h';

const noNewline = (value: string) => !/[\r\n]/.test(value);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100, "Le nom est trop long.")
    .refine(noNewline, "Le nom ne peut pas contenir de retour à la ligne."),
  email: z
    .string()
    .trim()
    .email("Adresse email invalide.")
    .max(254, "L'email est trop long.")
    .refine(noNewline, "L'email ne peut pas contenir de retour à la ligne."),
  phone: z
    .string()
    .trim()
    .max(30, "Le numéro de téléphone est trop long.")
    .refine(noNewline, "Le téléphone ne peut pas contenir de retour à la ligne.")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(["site-vitrine", "e-commerce", "application", "refonte", "autre"], {
    errorMap: () => ({ message: "Type de projet invalide." }),
  }),
  budget: z.enum(["< 1000", "1000-3000", "3000-5000", "5000-10000", "> 10000"], {
    errorMap: () => ({ message: "Budget invalide." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(5000, "Le message est trop long."),
  // Honeypot : champ caché, doit rester vide. Un bot qui le remplit est
  // traité en silence (succès renvoyé, aucun email envoyé).
  website: z.string().optional(),
});

function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.issues[0]?.message || "Données invalides" }),
        { status: 400 }
      );
    }

    const { name, email, phone, projectType, budget, message, website } = parsed.data;

    if (website && website.trim() !== "") {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    const ip = getClientIp(req);
    const { allowed, retryAfterSeconds } = checkRateLimit(ip);
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Trop de messages envoyés. Réessayez plus tard." }),
        {
          status: 429,
          headers: retryAfterSeconds ? { "Retry-After": String(retryAfterSeconds) } : undefined,
        }
      );
    }

    // Si Resend n'est pas configuré, retourner une réponse de succès simulée
    if (!resend) {
      console.log("Resend non configuré - simulation d'envoi d'email:");
      console.log("De:", email);
      console.log("Sujet:", `Nouveau message de ${name}`);
      console.log("Message:", message);

      return new Response(JSON.stringify({ success: true, message: "Email simulé (Resend non configuré)" }), { status: 200 });
    }

    const internalEmail = buildInternalEmail({ name, email, phone, projectType, budget, message });

    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: INTERNAL_RECIPIENT,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: internalEmail.html,
    });

    // Email de confirmation au client. Si ça échoue, on log mais on ne fait
    // pas échouer la requête : le mail interne, lui, est bien parti.
    try {
      const confirmation = buildConfirmationEmail({ name, message, responseDelay: CONTACT_RESPONSE_DELAY });
      await resend.emails.send({
        from: CONTACT_FROM_EMAIL,
        to: email,
        subject: "Votre message a bien été reçu",
        html: confirmation.html,
        text: confirmation.text,
      });
    } catch (confirmationError) {
      console.error("Erreur envoi email de confirmation:", confirmationError);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
}
