export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const PROJECT_TYPE_LABELS: Record<string, string> = {
  "site-vitrine": "Site vitrine",
  "e-commerce": "Site e-commerce",
  application: "Application web",
  refonte: "Refonte de site",
  autre: "Autre",
};

interface InternalEmailParams {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  message: string;
}

/** Email interne (vers Studio Vega) récapitulant la demande de contact. */
export function buildInternalEmail({ name, email, phone, projectType, budget, message }: InternalEmailParams) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "Non renseigné";
  const safeProjectType = escapeHtml(PROJECT_TYPE_LABELS[projectType] || projectType);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  const html = `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>Nom :</strong> ${safeName}</p>
    <p><strong>Email :</strong> ${safeEmail}</p>
    <p><strong>Téléphone :</strong> ${safePhone}</p>
    <p><strong>Type de projet :</strong> ${safeProjectType}</p>
    <p><strong>Budget :</strong> ${safeBudget}</p>
    <p><strong>Message :</strong><br/>${safeMessage}</p>
  `;

  return { html };
}

interface ConfirmationEmailParams {
  name: string;
  message: string;
  responseDelay: string;
}

/** Email de confirmation (accusé de réception) envoyé au client. */
export function buildConfirmationEmail({ name, message, responseDelay }: ConfirmationEmailParams) {
  const safeName = escapeHtml(name);
  const safeDelay = escapeHtml(responseDelay);
  const safeMessageHtml = escapeHtml(message).replace(/\n/g, "<br/>");

  const html = `
    <p>Bonjour ${safeName},</p>
    <p>Votre message a bien été reçu. Je vous répondrai sous ${safeDelay} environ.</p>
    <blockquote style="margin:16px 0;padding-left:12px;border-left:3px solid #ccc;color:#555;">
      ${safeMessageHtml}
    </blockquote>
    <p>Studio Vega — Guilhem Poincignon</p>
  `;

  const text = [
    `Bonjour ${name},`,
    "",
    `Votre message a bien été reçu. Je vous répondrai sous ${responseDelay} environ.`,
    "",
    `> ${message.split("\n").join("\n> ")}`,
    "",
    "Studio Vega — Guilhem Poincignon",
  ].join("\n");

  return { html, text };
}
