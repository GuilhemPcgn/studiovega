export const runtime = 'nodejs';

import { Resend } from 'resend';

// Vérifier si la clé API est disponible
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const { name, email, phone, projectType, budget, message } = await req.json();

    if (!name || !email || !projectType || !budget || !message) {
      return new Response(JSON.stringify({ error: "Champs requis manquants" }), { status: 400 });
    }

    // Si Resend n'est pas configuré, retourner une réponse de succès simulée
    if (!resend) {
      console.log("Resend non configuré - simulation d'envoi d'email:");
      console.log("De:", email);
      console.log("Sujet:", `Nouveau message de ${name}`);
      console.log("Message:", message);
      
      return new Response(JSON.stringify({ success: true, message: "Email simulé (Resend non configuré)" }), { status: 200 });
    }

    const emailHtml = `
      <h2>Nouvelle demande de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
      <p><strong>Type de projet :</strong> ${projectType}</p>
      <p><strong>Budget :</strong> ${budget}</p>
      <p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: 'contact@studiovega.dev',
      to: 'contact@studiovega.dev',
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
}
