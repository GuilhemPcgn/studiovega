# Studio Vega — site portfolio

Site vitrine professionnel de Guilhem Poincignon (Studio Vega), développeur web
fullstack freelance. Présente le portfolio de projets, les services, un profil
"à propos" et un moyen de contact.

## Stack

- Next.js 15 (App Router), React 18, TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives dans `components/ui/`)
- Framer Motion (transitions), Lenis (`@studio-freight/lenis`) pour le smooth scroll
- next-themes est installé mais le thème est **forcé en clair** (`forcedTheme="light"`
  dans `app/layout.tsx`) — voir "Couleurs" ci-dessous. `components/theme-toggle.tsx`
  n'est plus importé nulle part, c'est un fichier mort.
- Resend pour l'envoi d'email depuis `app/api/contact/route.ts`
- next-sitemap (génère `public/sitemap*.xml` en postbuild)
- Déployé sur **Vercel**, domaine `studiovega.dev` (redirige vers `www.studiovega.dev`)
- GA4 branché en dur dans `app/layout.tsx` (id `G-4R4Y4W8KJW`) + `components/analytics.tsx`
  pour le suivi des changements de route côté client

## Structure

- `app/` — routes App Router : `/`, `/portfolio`, `/portfolio/[id]`, `/a-propos`,
  `/services`, `/contact`, `/mentions-legales`, `/rgpd`
- `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` — favicon, icône
  Apple et image OG générés dynamiquement via `next/og`. Ils lisent le logo depuis
  `public/images/logo-sv-mark-256.png` / `logo-sv-440.png` (le "SV" détouré et la
  marque complète, voir "Logo" plus bas) et posent le fond anthracite
  `--bg-dark-section`. Ces fichiers s'exécutent hors de la cascade CSS : ils ne
  peuvent pas lire `app/globals.css`, d'où `lib/brand-colors.ts` (voir "Couleurs").
- `components/sections/` — sections de la page d'accueil
- `components/ui/` — kit shadcn/ui (beaucoup de composants installés mais non utilisés,
  c'est normal, ils sont tree-shakés). Entièrement à base de tokens de couleur —
  aucune valeur codée en dur.
- `components/project-card.tsx` — grande carte (projets phares), **entièrement
  cliquable** : le lien "Voir détails" porte un pseudo-élément `after:absolute
  after:inset-0` qui couvre toute la carte (pattern "stretched link"), les liens
  externes repassent au-dessus avec `relative z-10`. Pas de `<a>` englobant (on ne
  peut pas imbriquer d'ancres) ni de `onClick` (casserait Cmd+clic / clic-molette).
- `components/project-card-compact.tsx` — carte de second niveau ("autres
  réalisations") : ligne sans visuel, même pattern de lien étendu.
- `components/project-gallery.tsx` — galerie de la page de détail. Voir "Galerie
  et vidéo" plus bas.
- `lib/data.ts` — **source de vérité du contenu** : `featuredProjects`, `services`,
  `testimonials`, `skillCategories`, `setupItems`
- `lib/types.ts` — types `ProjectType`, `ServiceType`, `TestimonialType`. `ProjectType`
  n'a **plus de champ `githubUrl`** (retiré du type et de toutes les entrées sur
  demande explicite du propriétaire — voir "Liens vers le code" plus bas).
- `lib/brand-colors.ts` — miroir TypeScript des tokens de couleur, pour les rares
  contextes qui ne peuvent pas lire le CSS (voir "Couleurs").

## Ajouter un projet au portfolio

Ajouter une entrée à `featuredProjects` dans `lib/data.ts` (respecter `ProjectType`).
L'ordre du tableau = ordre d'affichage (le tableau n'est pas trié automatiquement
par date).

Le portfolio est hiérarchisé en **deux niveaux**, pilotés par le booléen
`featured` de `ProjectType` :

- `featured: true` → **projets phares**. Grandes cartes (`ProjectCard`, image 16:9)
  dans une grille 2 colonnes en haut de `/portfolio`.
- pas de `featured` → **autres réalisations**. Lignes compactes sans visuel
  (`ProjectCardCompact`) en second niveau de `/portfolio`.

`lib/data.ts` exporte `highlightedProjects` et `otherProjects`, dérivés de
`featuredProjects` par filtrage — ne pas maintenir de troisième tableau à la main.

La **page d'accueil est découplée** : elle affiche `homeProjects`, construit à partir
de la liste d'identifiants `homeProjectIds` et non des 3 premiers phares. Les deux
surfaces répondent à des objectifs différents — la grille du portfolio garde
La Console et Herson côte à côte (cohérence sectorielle studios de musique), l'accueil
montre un éventail plus large (SaaS, mobile, animation). Modifier `homeProjectIds`
pour changer le trio de l'accueil ; un identifiant inconnu est ignoré silencieusement.

Garder les phares à 4-5 maximum : au-delà, la hiérarchie ne se lit plus. Le critère
est la valeur (technicité + pertinence commerciale actuelle), pas la chronologie.

### Liens vers le code

Le propriétaire a demandé de retirer **tous** les liens vers du code source /
GitHub liés aux projets (le champ `githubUrl` sur `ProjectType`, le bouton "Code
source" de la page de détail, l'icône GitHub des deux types de carte). C'est
délibéré, ne pas les réintroduire sans demande explicite.

Son **profil** GitHub personnel reste en revanche affiché (pied de page, page
Contact, `sameAs` du JSON-LD dans `app/layout.tsx`) — seuls les liens vers des
dépôts de projets ont été retirés.

Sur la grande carte, la rangée de liens externes ne montre donc plus que
`liveUrl` (site en ligne) si présent ; sans lien, la rangée ne se rend pas du
tout (`{project.liveUrl && (...)}`) pour ne pas laisser un espace vide.

### Page de détail d'un projet

`app/portfolio/[id]/page.tsx` : le H1 et les badges de stack ouvrent la page,
puis la **galerie en pleine largeur** (pas de grille 2 colonnes image/texte),
puis la rangée de boutons (Site live, démo vidéo si pas dans la galerie — voir
plus bas), puis le texte en deux colonnes (`lg:grid-cols-3`) — le texte sur
`lg:col-span-2` contraint à une mesure lisible, et un encart "Stack technique"
`sticky` en aside qui récupère l'espace resté vide à droite. Sur mobile l'encart
repasse au-dessus du texte (`order-first`).

La galerie pleine largeur existe parce que les visuels sont des **captures
d'interface** : à 600px (l'ancienne largeur en grille 2 colonnes) le texte des
captures devenait illisible. Ne pas revenir à une mise en page qui réduit
l'image sans y repenser.

### Galerie et vidéo

`ProjectGallery` prend `images: string[]` et, optionnellement, `video: { src,
poster }`. Si `video` est fourni, **elle devient le dernier slide de la
galerie** plutôt qu'un bouton séparé ouvrant un `Dialog` — pour un projet dont
l'argument est le mouvement (transitions, animation), la vidéo est le meilleur
visuel du projet, pas un bonus à part. `videoUrl`/`videoPoster` sur
`ProjectType` alimentent ce prop depuis la page de détail.

Comportements à préserver si on retouche ce composant :
- flèches gauche/droite, flèches clavier (`ArrowLeft`/`ArrowRight` au niveau
  `document`), pastilles de navigation, compteur, bouclage ;
- quitter le slide vidéo **coupe la lecture** (`videoRef.current?.pause()`),
  sinon le son continue en arrière-plan sur les slides suivants ;
- si le focus est dans le `<video>`, les flèches clavier lui sont laissées (pas
  de changement de slide) — sinon on ne peut pas se déplacer dans la vidéo ;
- overlay de lecture (bouton play sur le poster) qui **s'arrête avant la barre
  de contrôles native** (`bottom-14`, pas `inset-0`), sinon le scrubber devient
  inutilisable tant que la vidéo n'a pas démarré ;
- `preload="none"` sur le `<video>` : zéro octet transféré tant qu'on n'a pas
  cliqué play (vérifié : aucune requête `.mp4` même dialog/slide ouvert).

`ProjectGallery` rend toujours un `<video src=...>` natif, qu'il n'y a **pas**
de fallback `<iframe>` pour une URL externe (YouTube/Vimeo). Si on ajoute un
projet dont la vidéo est hébergée ailleurs qu'en local, `<video>` ne saura pas
la lire — il faudra réintroduire une branche conditionnelle dans le composant
avant de brancher un tel `videoUrl`.

### Visuels

- `imageUrl` = visuel **unique** : vignette des cartes et image OpenGraph. Doit être
  en 16:9 (les cartes le recadrent en `object-cover`).
- `gallery` = tableau optionnel affiché par `ProjectGallery` sur la page de détail.
  Absent → `imageUrl` seule.
- Les sources non traitées sont dans `~/ProjetsCode/photos`. Pipeline :
  `cwebp -q 80 -resize 1600 0 -m 6` pour le paysage, `-resize 0 1000` pour les
  captures mobiles. 30 Mo de PNG → 672 Ko de WebP.
- Captures mobiles (9:16) : la galerie les centre avec `object-contain` sur
  `bg-card`, elles ne sont pas recadrées. Pour la vignette de carte il faut en
  revanche un 16:9 — Allyia App utilise `allyia-app/cover.webp`, un triptyque de
  trois captures assemblé avec ffmpeg (`hstack` de 3 × 533×900).
- Vidéo : encodage `-vf scale=1280:-2,fps=30 -c:v libx264 -crf 28 -movflags
  +faststart` — 165 Mo → 5 Mo. Le poster est une frame extraite au milieu de
  l'action (`ffmpeg -ss <t> -frames:v 1`), pas la première frame.
- Avant de publier une capture d'écran d'une vraie application, vérifier qu'elle
  ne montre pas d'info sensible (nom de projet interne, email de test, etc.). Un
  cas réel : une capture de La Console affichait `admin@resona.dev` (ancien nom
  du projet) dans le coin de l'interface — masqué a posteriori avec `ffmpeg
  drawbox` à la couleur de fond exacte de la zone, sur le PNG source avant
  réencodage WebP (pas de double compression).

Toujours **auto-héberger** les images dans `public/images/projects/` plutôt que de
hotlink des images externes (Pexels/Unsplash/etc.) : `next.config.js` n'a plus
`images.unoptimized`, donc l'optimisation d'image Next est active et nécessite soit
des images locales, soit un `remotePatterns` explicite pour chaque host externe.

### Logo

`public/logoSV.png` est le fichier source fourni par le propriétaire (1024×1024,
75% transparent, la marque `<SV>` n'occupe qu'une bande centrale de 871×301).
Dérivés générés et utilisés dans le code (ne pas régénérer depuis un autre
fichier sans revérifier ces coordonnées de recadrage) :
- `public/images/logo-sv.webp` (871×301) — en-tête et loader
- `public/images/logo-sv-mark-256.png` (256×256) — le "SV" seul, sans les
  chevrons, centré — favicon et icône Apple (la marque complète est trop large
  pour rester lisible à 32px)
- `public/images/logo-sv-440.png` (440×152) — image OpenGraph

Le logo est ocre (`#BA7517` sur les zones opaques) — c'est volontairement la
même teinte que `--accent`, ça tombe juste avec la palette actuelle.

## Tarification (page Services)

Les 6 forfaits de `services` dans `lib/data.ts` sont calculés sur un **TJM de
400€/jour** × une estimation de jours minimum (ex. Frontend = 4j × 400 = 1600€).
Si on ajoute ou modifie un forfait, garder ce calcul cohérent — un prospect qui
divise le prix affiché par 400 doit retomber sur un nombre de jours plausible.

Chaque forfait affiche sous son prix une clause de dépassement de périmètre
("Périmètre au-delà de ce qui est décrit ci-dessus : facturé au TJM de
400€/jour.") écrite en dur dans `app/services/page.tsx` (pas dans `lib/data.ts`,
le texte est identique sur les 6 forfaits).

Un encart séparé "Mission au TJM" (dans `app/services/page.tsx`, entre la grille
des forfaits et "Comment je travaille") couvre le renfort ponctuel / les
missions longues, avec une ligne de disponibilité pour du temps partiel régulier.
Ne pas le fusionner dans la grille des 6 forfaits — c'est une offre différente
(mission ouverte, pas un livrable fermé).

L'aperçu Services de la page d'accueil (`services-preview.tsx`) affiche les 3
premiers `services` avec le même `startingPrice` — modifier un prix dans
`lib/data.ts` le change aussi sur l'accueil, c'est voulu (une seule source de
vérité tarifaire).

## Couleurs

Identité **crème / ambre** (inspirée de l'univers audio analogique — pochettes
vinyle, papier, chaleur studio), qui a remplacé l'ancienne identité violet/bleu
indigo. Tokens centralisés dans `app/globals.css`, en tête de fichier :

- `--bg-page` (#FAEEDA, crème) — fond de **toutes** les pages et sections, sauf :
- `--bg-dark-section` (#211C18, anthracite) — réservé au **hero de l'accueil et
  au footer**, les deux seules zones sombres du site (classe utilitaire
  `.on-dark`, qui remappe aussi `text-muted-foreground`/`text-foreground`/
  `hover:text-secondary` pour les composants partagés entre thème clair et
  section sombre — cf. le pied de page). Ne pas ajouter de troisième zone
  sombre sans demande explicite.
- `--text-primary` / `--text-secondary` — texte sur fond clair
- `--text-on-dark` / `--text-secondary-on-dark` — texte sur fond sombre
- `--accent` (#BA7517) / `--accent-hover` (#854F0B) / `--accent-on-dark`
  (#EF9F27) / `--accent-soft` (#FAC775, fond des badges) / `--on-accent-light`
  (#412402, texte sur badge ambre clair)
- `--on-accent` (#FAEEDA) — texte des boutons pleins. **Ne pas utiliser
  `--on-accent-light` (#412402) comme texte de bouton sur `--accent`/
  `--accent-hover`** : ce couple ne passe qu'à 3,8:1, sous le seuil AA pour du
  texte de taille normale. Idem pour `--accent` en lien dans du texte courant
  (3,24:1 sur crème) — utiliser `--accent-hover` pour ça, `--accent` reste
  correct pour les bordures, icônes et grands titres.

Les tokens shadcn/ui (`--background`, `--card`, `--primary`, etc., toujours en
HSL sans wrapper `hsl()`) sont mappés sur cette palette juste en dessous dans
`globals.css` — ne pas leur redonner des valeurs indépendantes.

`tailwind.config.ts` expose des utilitaires sémantiques par-dessus ces tokens :
`bg-page`, `bg-dark-section`, `bg-elevated`, `text-ink`, `text-dim`, `text-on-dark`,
`text-dim-on-dark`, `border-subtle`, et `amber`/`amber-hover`/`amber-light`/
`amber-soft`/`amber-deep`. **Toute nouvelle couleur doit passer par un de ces
tokens ou utilitaires — aucune valeur hexadécimale en dur dans un composant.**

Deux endroits ne peuvent pas lire le CSS et ont donc besoin d'un hex explicite :
- `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` (générés par
  `next/og` au build, hors cascade CSS)
- les couleurs de repli du canvas de particules du hero (`lib/particle-animation.ts`,
  qui lit les tokens via `getComputedStyle` à l'exécution mais a besoin d'un
  repli statique)

Ces deux cas importent `lib/brand-colors.ts`, un miroir TypeScript des mêmes
valeurs — **à mettre à jour en même temps que `globals.css`** si la palette
change encore, sinon les icônes générées divergent silencieusement du reste
du site.

Les classes utilitaires historiques (`.gradient-text`, `.gradient-bg`,
`.btn-primary`, `.btn-secondary`, `.card-hover`, `.section-title`,
`.section-subtitle`) sont conservées par leur nom dans `globals.css` mais leur
définition a changé de fond en comble (elles étaient des dégradés violet→bleu,
elles pointent maintenant sur les tokens ambre). Ne pas juger leur couleur par
leur nom.

Avant toute modification de couleur, vérifier le contraste sur les **pixels
réellement rendus** plutôt que sur la valeur de token seule — un élément peut
hériter d'un fond différent de celui attendu selon où il est monté (exemple
vécu : l'en-tête est `fixed` et transparent en haut de l'accueil, donc son
texte doit s'adapter au hero sombre qu'il survole plutôt qu'au token `--bg-page`
qu'on croirait actif — voir `overDarkHero` dans `components/header.tsx`).

## Conventions de design (hors couleur)

- Pas de plugin `@tailwindcss/typography` installé — ne pas utiliser les classes
  `prose`/`prose-invert` (elles ne font rien actuellement). Les pages légales stylent
  le texte manuellement avec les classes du design system.
- `prefers-reduced-motion` est respecté pour : le loader plein écran, l'animation de
  particules du Hero (canvas), et Lenis (smooth scroll désactivé). Les animations
  d'apparition Framer Motion (`whileInView`, fade+slide ~0.6s) ne sont **pas**
  audités individuellement — c'est un point resté ouvert, voir TODO.

## Ton du contenu / rédaction

Tous les textes de présentation (accroches, sous-titres de section, CTA) et les
descriptions de projets (`shortDescription`/`fullDescription`/`context`/
`challenge`/`solution` dans `lib/data.ts`) ont été réécrits pour éviter un ton
"généré par IA" : phrases courtes et affirmatives, faits plutôt qu'adjectifs
(éviter "sur mesure", "passion", "unique", "expérience optimale", "donner vie
à"), peu ou pas de tirets cadratins dans la prose, pas de construction en trois
temps ni d'antithèses "ce n'est pas X, c'est Y", jamais de commentaire sur
l'importance de ce qu'on vient de dire. Garder ce registre pour tout nouveau
texte ajouté au site.

Ne pas mentionner **Resona** ni **PatchBay** (anciens noms du projet La Console)
dans le texte ni dans un visuel — si une nouvelle capture de La Console est
ajoutée, vérifier qu'elle n'affiche pas ces noms quelque part dans l'interface
(coin de la sidebar, titre d'onglet, etc.).

## Témoignages

`testimonials` dans `lib/data.ts` (type `TestimonialType`). Affichés par
`components/sections/testimonials.tsx` sur la page d'accueil : grille centrée
tant qu'il y en a 3 ou moins (1/2/3 colonnes selon le nombre exact, pour éviter
une carte isolée), bascule automatique en carrousel au-delà de
`CAROUSEL_THRESHOLD` (3).

**Ne jamais générer de faux témoignage.** Chaque entrée doit venir d'un retour
client réel transmis par le propriétaire du site — ne pas en inventer un pour
« remplir » la grille, même à titre d'exemple ou de placeholder.

Le champ `name` suppose une personne (ex. "Alexandre Dufour" / `position`
"CEO" / `company` "Turbo Club"). Quand le client ne donne **aucun nom
individuel** — cas de l'avis Herson Studio — ne pas en inventer un : utiliser
le nom de l'entreprise comme `name`, et caser dans `position`/`company` des
faits déjà vérifiables ailleurs dans `lib/data.ts` plutôt que des champs vides
ou redondants (ex. `position: "Studio de musique professionnel"` reprend la
description du projet, `company: "hersonstudio.fr"` reprend `liveUrl` — ne pas
répéter le nom de l'entreprise une seconde fois dans `company`).

Éditer le texte d'un témoignage doit rester un ajustement de forme, jamais de
fond : normaliser une variante de nom déjà utilisée ailleurs sur le site (ex.
« HERSON PROD » → « Herson Studio », pour rester cohérent avec le titre du
projet), ou couper une formule de clôture redondante ("merci encore") sont
acceptables ; reformuler ce que le client a voulu dire ne l'est pas.

## Variables d'environnement

- `RESEND_API_KEY` — clé API Resend pour `app/api/contact/route.ts`. Si absente,
  la route simule l'envoi (log console) au lieu d'échouer.
- `NEXT_PUBLIC_SITE_URL` — utilisée par `next-sitemap.config.js` (fallback
  `https://studiovega.dev`).

## Commandes

- `npm run dev` — serveur de dev (le port 3000 est souvent déjà pris par un autre
  projet sur cette machine ; Next bascule automatiquement sur un port libre)
- `npm run build` — build de prod (le lint est ignoré pendant le build, voir
  `eslint.ignoreDuringBuilds` dans `next.config.js`). **Attention** : lancer un
  build pendant qu'un `npm run dev` tourne en parallèle casse ce dernier (il
  réécrit `.next/`) — tuer le process du port 3000 et supprimer `.next/` avant
  de relancer `npm run dev` après un build.

## État du formulaire de contact

Le formulaire complet (nom/email/type de projet/budget/message, avec React Hook
Form + Zod + l'API Resend) a été codé et **l'API fonctionne** (dernier commit avant
cette session : "api resend ok"). Sur décision explicite du propriétaire du site,
il reste **désactivé** pour l'instant — la page `/contact` n'affiche que les
coordonnées directes (email, téléphone, disponibilité freelance/CDI, réseaux). Le
code du formulaire mort a été supprimé de `app/contact/page.tsx` (il était
commenté) mais `app/api/contact/route.ts` est laissé intact et fonctionnel, prêt
à être rebranché.

## TODO / points laissés ouverts intentionnellement

Ces points nécessitent une décision ou une info que seul le propriétaire du site
peut fournir — ils n'ont pas été résolus automatiquement :

1. **Image cassée sur "Allyia - Site officiel"** : `lib/data.ts` référence
   `/images/Allyia_Website.png`, un fichier qui n'existe pas dans `public/images/`
   (confirmé 404 en production). Le projet est en second niveau donc la carte
   compacte n'affiche plus de visuel, mais **la page de détail
   `/portfolio/allyia-website` casse toujours**. Le site est en ligne sur
   `allyia.fr` (vérifié) — une capture suffirait à régler ça, jamais demandée.
2. **Mentions légales / RGPD** (`app/mentions-legales`, `app/rgpd`) : restylées et
   nettoyées, mais les champs identité (raison sociale, statut juridique, SIRET,
   adresse) restent des placeholders visuellement mis en évidence (fond rouge clair).
   À compléter avant que ces pages soient considérées "prod-ready".
3. **Photo "À propos"** : reste une photo stock (Unsplash, désormais auto-hébergée
   dans `public/images/projects/about-developer.jpg`), choix explicite du
   propriétaire en attendant une vraie photo.
4. **`npm audit`** signale des vulnérabilités dans des dépendances transitives —
   pas investiguées dans cette session (hors périmètre de la refonte visuelle),
   à trier séparément.
5. **Animations Framer Motion** (hors loader/particules/Lenis) ne sont pas
   individuellement conditionnées par `prefers-reduced-motion` — amélioration
   possible via `useReducedMotion()` de Framer Motion si besoin d'une conformité
   a11y plus stricte.
6. **Domotique / ALIE** : volontairement pas ajouté au portfolio — aucun dépôt
   trouvé sur la machine, donc ni stack vérifiable ni visuel. À reprendre quand le
   code et un visuel (schéma d'architecture ou capture Home Assistant) seront
   disponibles.
7. **`components/theme-toggle.tsx` est un fichier mort** depuis le retrait du
   bascule clair/sombre (le site n'a plus qu'un thème). À supprimer si on est
   sûr qu'aucun retour au bascule n'est prévu — laissé en place pour l'instant
   au cas où l'idée reviendrait.
8. **Cartes de projets phares sans lien externe** (`ProjectCard`) : seul
   `liveUrl` y est affiché depuis le retrait des liens GitHub. Un projet phare
   sans site en ligne (ex. La Console, usage interne) n'a donc plus aucun lien
   externe sur sa grande carte, seulement "Voir détails". Assumé pour l'instant,
   mais à surveiller si ça devient fréquent.
