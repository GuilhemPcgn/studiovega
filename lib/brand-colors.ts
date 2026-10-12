/**
 * Miroir TypeScript des tokens de `app/globals.css`.
 *
 * Nécessaire uniquement pour les contextes qui s'exécutent hors de la cascade
 * CSS et ne peuvent donc pas lire les variables : les images générées par
 * `next/og` (favicon, icône Apple, image OpenGraph) et les valeurs de repli du
 * canvas du hero.
 *
 * Toute modification ici doit être répercutée dans `app/globals.css`, et
 * inversement. Aucun autre fichier ne doit contenir de valeur hexadécimale.
 */
export const brand = {
  bgPage: '#FAEEDA',
  bgDarkSection: '#211C18',
  textPrimary: '#2C2C2A',
  textSecondary: '#5F5E5A',
  textOnDark: '#FFFFFF',
  textSecondaryOnDark: '#B4B2A9',
  accent: '#BA7517',
  accentHover: '#854F0B',
  accentOnDark: '#EF9F27',
  accentSoft: '#FAC775',
  onAccentLight: '#412402',
} as const;
