import {
  Layout,
  Code,
  Smartphone,
  Database,
  PenTool,
  Globe,
  Server,
  ShoppingCart
} from "lucide-react";
import { ProjectType, ServiceType, TestimonialType } from "./types";

export const featuredProjects: ProjectType[] = [
  {
    id: "la-console",
    title: "La Console - SaaS de gestion pour studios d'enregistrement",
    shortDescription: "Outil de gestion pour studios d'enregistrement : projets, sessions, facturation et commentaires horodatés sur les pistes audio.",
    fullDescription: "La Console regroupe l'activité d'un studio dans un seul outil : suivi des projets, planning des sessions et des salles, fiches clients, facturation. Les mix sont déposés dans l'application, et le client les écoute et les commente directement sur la forme d'onde, à la seconde près. Un studio peut avoir plusieurs membres, chacun avec son rôle, et une même personne peut travailler pour plusieurs studios.",
    context: "Projet personnel. J'ai été musicien avant d'être développeur, et c'est de là qu'est venue l'idée. Deux versions l'ont précédé avant d'aboutir à celle-ci. Le développement est terminé : l'application fonctionne de bout en bout, facturation Stripe comprise.",
    challenge: "Le point sensible, c'était l'isolation des données. Chaque studio ne doit jamais voir celles d'un autre, y compris en cas de bug côté application. S'y ajoutait le feedback audio horodaté : relier un commentaire à une position précise dans un fichier, puis l'afficher au bon endroit sur la forme d'onde.",
    solution: "J'ai traité l'isolation à deux niveaux : des règles par studio directement en base Supabase, et un filtrage systématique côté API NestJS. Une faille applicative ne suffit donc pas à faire fuiter des données. L'affichage et la navigation dans l'audio passent par WaveSurfer.js, la facturation par Stripe.",
    imageUrl: "/images/projects/la-console/music.webp",
    gallery: [
      "/images/projects/la-console/music.webp",
      "/images/projects/la-console/dashboard.webp",
      "/images/projects/la-console/booking.webp",
      "/images/projects/la-console/facture.webp",
    ],
    techStack: ["Next.js", "React", "NestJS", "Supabase", "PostgreSQL", "Stripe", "WaveSurfer.js", "React Query", "TypeScript"],
    date: "2026-09",
    featured: true
  },
  {
    id: "herson-studio",
    title: "Herson Studio - Studio de musique professionnel",
    shortDescription: "Site vitrine d'un studio de musique professionnel : enregistrement, production, mixage et mastering.",
    fullDescription: "Site vitrine pour Herson Studio : présentation du studio et de sa façon de travailler, liste des artistes accompagnés avec écoute intégrée, offre de synchronisation, grille tarifaire et demande de devis.",
    context: "Commande d'un client, studio de musique professionnel. Le site est en ligne sur hersonstudio.fr.",
    challenge: "Le site repose sur beaucoup de médias : photos du studio, visuels d'artistes, extraits audio. C'est ce qui pèse le plus lourd au chargement, surtout sur mobile.",
    solution: "J'ai découpé le code par page pour ne charger que ce qui est affiché, converti toutes les images en WebP et servi les polices depuis le site plutôt que depuis Google Fonts. Un contrôle de poids tourne à chaque build et bloque si la page dépasse le budget fixé. Le formulaire de devis fonctionne sans backend, ce qui garde l'hébergement gratuit.",
    imageUrl: "/images/projects/herson-studio/home.webp",
    gallery: [
      "/images/projects/herson-studio/home.webp",
      "/images/projects/herson-studio/artists.webp",
      "/images/projects/herson-studio/syncro.webp",
      "/images/projects/herson-studio/tarif.webp",
    ],
    liveUrl: "https://www.hersonstudio.fr/",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Router", "Vercel"],
    date: "2025-10",
    featured: true
  },
  {
    id: "free-your-mind",
    title: "Free Your Mind - Agence de booking DJ",
    shortDescription: "Site vitrine d'une agence de booking DJ, avec une platine vinyle interactive qui réagit à la sélection d'artiste.",
    fullDescription: "Site vitrine pour une agence de booking DJ. La page principale est le roster : une mosaïque d'artistes posée à côté d'une platine vinyle. Cliquer sur un artiste fait glisser son disque sur la platine, lance son extrait audio et ouvre sa fiche détaillée avec un formulaire de booking.",
    context: "L'agence voulait un site qui donne à entendre et à voir son univers, pas une simple liste d'artistes.",
    challenge: "Faire passer une carte d'artiste de la mosaïque à sa fiche détaillée sans que l'élément disparaisse puis réapparaisse. Et gérer plusieurs sources audio sans qu'elles se superposent quand on enchaîne les artistes.",
    solution: "Les transitions utilisent le plugin Flip de GSAP : il mesure la position de départ et d'arrivée de chaque élément et anime le déplacement, donc la carte cliquée devient la fiche sans être démontée. Pour le son, un seul contrôleur gère la lecture et coupe la piste en cours avant d'en lancer une autre.",
    imageUrl: "/images/projects/free-your-mind/home.webp",
    gallery: [
      "/images/projects/free-your-mind/home.webp",
      "/images/projects/free-your-mind/artist.webp",
    ],
    videoUrl: "/videos/free-your-mind-demo.mp4",
    videoPoster: "/images/projects/free-your-mind/demo-poster.webp",
    techStack: ["React", "Vite", "Tailwind CSS", "GSAP", "GSAP Flip", "JavaScript"],
    date: "2025-07",
    featured: true
  },
  {
    id: "club-astro-toussaint",
    title: "Club Astro Toussaint - Blog d'un club d'astronomie amateur",
    shortDescription: "Blog et plateforme communautaire pour un club d'astronomie amateur : articles, observations, calendrier d'événements et système solaire interactif.",
    fullDescription: "Site du Club d'Astronomie de Toussaint, en Normandie près de Fécamp : articles et observations partagés par les membres, calendrier des événements avec les phases de la lune jour par jour, et une page Système Solaire qui détaille chaque planète. Un panneau d'administration permet de gérer les utilisateurs, les publications et les commentaires, avec un graphique d'activité du site.",
    context: "Projet personnel, pour le club d'astronomie amateur dont je fais partie.",
    challenge: "Le site mélange blog et application communautaire : plusieurs rôles d'utilisateurs avec des droits différents, plusieurs types de contenus (articles, observations, événements) à gérer depuis un seul back-office. Il fallait aussi un moyen de présenter les huit planètes du système solaire de façon à la fois ludique et précise.",
    solution: "L'authentification Firebase distingue administrateurs et membres, chacun avec des actions autorisées différentes. Articles, observations, événements, commentaires et utilisateurs sont stockés dans MongoDB et centralisés dans un panneau d'administration qui affiche aussi un graphique d'activité. La page Système Solaire liste les planètes une par une avec leurs données (distance au Soleil, diamètre, type).",
    imageUrl: "/images/projects/club-astro-toussaint/home.webp",
    gallery: [
      "/images/projects/club-astro-toussaint/home.webp",
      "/images/projects/club-astro-toussaint/articles.webp",
      "/images/projects/club-astro-toussaint/events.webp",
      "/images/projects/club-astro-toussaint/solar-system.webp",
      "/images/projects/club-astro-toussaint/admin.webp",
    ],
    liveUrl: "https://astrotoussaint76.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "MongoDB", "Firebase Auth", "Vercel"],
    date: "2026-10",
    featured: true
  },
  {
    id: "stonebridge",
    title: "Stonebridge - Site vitrine pour un consultant en conformité financière",
    shortDescription: "Site vitrine pour un consultant en finance, spécialisé en conformité réglementaire : LCB-FT, KYC et gouvernance.",
    fullDescription: "Stonebridge conseille les family offices, sociétés de gestion, experts-comptables et avocats sur leurs obligations de conformité réglementaire : LCB-FT, KYC, gouvernance. Le site présente les mandats du cabinet, une typologie des situations sensibles traitées, la méthode de travail en plusieurs étapes, et un formulaire pour demander une évaluation confidentielle.",
    context: "Commande d'un client, consultant en finance spécialisé en conformité réglementaire.",
    challenge: "Le site s'adresse à une clientèle institutionnelle exigeante (family offices, sociétés de gestion, avocats). Il fallait une image sobre et crédible qui reflète la confidentialité et le sérieux attendus par ce type de clients, en français et en anglais.",
    solution: "Interface en React, TypeScript et Tailwind CSS, avec les composants Radix UI (shadcn/ui). La direction artistique mise sur la sobriété : vidéo de fond en boucle sur la page d'accueil, typographie serif, palette bleu nuit. Le contenu est disponible en français et en anglais, et le formulaire de contact passe par Formspree.",
    imageUrl: "/images/projects/stonebridge/home.webp",
    gallery: [
      "/images/projects/stonebridge/home.webp",
      "/images/projects/stonebridge/situations.webp",
      "/images/projects/stonebridge/method.webp",
    ],
    liveUrl: "https://stonebridgeconsult.com/",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Formspree", "OVH"],
    date: "2026-10",
    featured: true
  },
  {
    id: "allyia-app",
    title: "Allyia - Application de gestion de santé mentale",
    shortDescription: "Application mobile de suivi de santé mentale : humeur, traitements et assistant conversationnel.",
    fullDescription: "Allyia aide à suivre sa santé mentale au quotidien : relevé d'humeur, gestion des ordonnances et rappels de prise de médicaments, historique sur la durée. L'application intègre aussi un assistant conversationnel, pensé pour dépanner entre deux rendez-vous et non pour les remplacer.",
    context: "Start-up montée avec un ami, sur un sujet qui nous touche tous les deux personnellement.",
    challenge: "C'était mon premier projet mobile de cette ampleur, quelques mois après la sortie d'école, avec en plus une partie IA que je découvrais.",
    solution: "Le développement est toujours en cours. La base fonctionne : authentification, suivi d'humeur, gestion des traitements et assistant conversationnel.",
    imageUrl: "/images/projects/allyia-app/cover.webp",
    gallery: [
      "/images/projects/allyia-app/dashboard.webp",
      "/images/projects/allyia-app/chatbot.webp",
      "/images/projects/allyia-app/meds.webp",
      "/images/projects/allyia-app/humeur.webp",
    ],
    techStack: ["Swift", "SwiftUI", "Firebase Auth", "Firestore", "Mistral AI"],
    date: "2023-07",
    featured: true
  },
  {
    id: "turbo-club",
    title: "Turbo Club - Expérience Formule 1 VIP",
    shortDescription: "Billetterie en ligne pour une soirée VIP autour de la Formule 1.",
    fullDescription: "Site de vente de billets pour des soirées privées réunissant des passionnés de Formule 1 et d'anciens pilotes. Présentation de l'événement, des formules disponibles, et paiement en ligne.",
    context: "L'organisateur voulait un site à la hauteur du positionnement haut de gamme de ses soirées, avec un paiement sécurisé. Le délai était court.",
    challenge: "Livrer vite un site qui inspire confiance, puisqu'on demande au visiteur de payer une place chère en ligne.",
    solution: "Site sans backend pour tenir le délai : le paiement passe directement par Stripe Checkout, appelé côté client. Moins de code à écrire, moins de surface à sécuriser, et rien à maintenir côté serveur.",
    imageUrl: "/images/projects/turbo-club.jpg",
    liveUrl: "https://turboclub.vip",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Stripe", "Netlify"],
    date: "2025-04",
    featured: true
  },
  {
    id: "allyia-website",
    title: "Allyia - Site officiel de l'application de santé mentale",
    shortDescription: "Site de présentation de l'application Allyia.",
    fullDescription: "Site de présentation d'Allyia : fonctionnalités de l'application, articles de blog sur la santé mentale, inscription à la newsletter et accès au serveur Discord de la communauté.",
    context: "Point d'entrée public de la start-up, et support de nos actions de communication : référencement, réseaux sociaux, newsletters.",
    challenge: "Le sujet est sensible. Il fallait un site clair et rassurant, qui informe sans promettre plus que ce que l'application fait réellement.",
    solution: "Next.js avec l'App Router, référencement travaillé dès le départ, et des outils en place pour les formulaires et la newsletter. Le site est en ligne et évolue au fil des retours.",
    imageUrl: "/images/Allyia_Website.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn/ui", "Brevo", "OpenGraph SEO"],
    date: "2025-06"
  },
  {
    id: "allyia-blog",
    title: "Allyia - Blog Santé Mentale",
    shortDescription: "Blog sur la santé mentale, rattaché à l'application Allyia.",
    fullDescription: "Blog rattaché à Allyia, consacré aux sujets de santé mentale et à leur déstigmatisation.",
    context: "Créé pendant le développement de la plateforme Allyia, pour alimenter le référencement et donner une raison de revenir sur le site.",
    challenge: "Obtenir une lecture confortable sur des articles longs, sans se donner la charge d'un CMS pour un blog à un seul auteur.",
    solution: "Site uniquement frontend en Next.js et Tailwind. Les articles sont stockés dans un fichier JSON : comme je suis seul à publier, une base de données n'aurait rien apporté.",
    imageUrl: "/images/projects/allyia-blog.jpg",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    date: "2025-04"
  },
  {
    id: "greenroots",
    title: "Greenroots - Réduire son bilan CO2 en plantant des arbres",
    shortDescription: "Plateforme d'achat d'arbres à planter, avec paiement en ligne et suivi de l'arbre.",
    fullDescription: "Plateforme de reforestation : on achète un ou plusieurs arbres, qui sont ensuite plantés, et on suit leur évolution depuis son compte. Le site comprend un catalogue par essence et par région, un paiement en ligne et un back-office de gestion.",
    context: "Projet de fin d'études de l'école O'Clock, réalisé à quatre fin 2024.",
    challenge: "Couvrir une chaîne complète en quelques semaines et à plusieurs : catalogue, paiement, gestion des stocks et tableau de bord administrateur.",
    solution: "Application fullstack en Node.js et Express, avec des templates EJS rendus côté serveur et PostgreSQL en base. Un choix simple et rapide à mettre en place, adapté au temps dont nous disposions.",
    imageUrl: "/images/projects/greenroots.jpg",
    liveUrl: "https://greenroots-3w7wi.ondigitalocean.app/",
    techStack: ["EJS", "CSS", "Node.js", "Express", "PostgreSQL", "Digital Ocean"],
    date: "2024-11"
  },
];

/** Projets phares : grandes cartes, en tête du portfolio et sur la page d'accueil. */
export const highlightedProjects = featuredProjects.filter((p) => p.featured);

/** Autres réalisations : liste compacte, en second niveau du portfolio. */
export const otherProjects = featuredProjects.filter((p) => !p.featured);

/**
 * Sélection de la page d'accueil, volontairement découplée de l'ordre du
 * portfolio : la grille garde La Console et Herson côte à côte pour la
 * cohérence sectorielle, l'accueil montre un éventail plus large (SaaS,
 * animation, mobile).
 */
const homeProjectIds = ["la-console", "allyia-app", "free-your-mind"];

export const homeProjects = homeProjectIds
  .map((id) => featuredProjects.find((p) => p.id === id))
  .filter((p): p is ProjectType => p !== undefined);

export const services: ServiceType[] = [
  {
    id: "site-vitrine",
    title: "Création de Site Vitrine",
    description: "Un site pour présenter votre activité, vos services et vous rendre joignable.",
    longDescription: "Un site vitrine sert à être trouvé et à donner envie de vous contacter. Je m'occupe du design, de l'intégration, du référencement de base et de la mise en ligne. Le site s'affiche correctement sur téléphone comme sur ordinateur, et vous pouvez me confier ensuite l'hébergement et les mises à jour si vous préférez ne pas vous en occuper.",
    features: [
      "Design sur mesure adapté à votre identité",
      "Optimisation SEO pour un meilleur référencement",
      "Responsive design pour tous les appareils",
      "Intégration de formulaires de contact",
      "Hébergement et maintenance disponibles",
      "Formation à l'utilisation du site"
    ],
    icon: Layout,
    startingPrice: 1200
  },
  {
    id: "boutique-en-ligne",
    title: "Création de Boutique en Ligne",
    description: "Une boutique Shopify, WooCommerce ou équivalent pour vendre vos produits en ligne.",
    longDescription: "Je mets en place votre boutique sur une solution e-commerce existante (Shopify, WooCommerce...) : catalogue produits, moyens de paiement, livraison et pages légales. L'objectif est d'avoir une boutique fonctionnelle rapidement, sans repartir d'un développement complet. Je peux ensuite vous former à la gestion au quotidien ou m'occuper de la maintenance.",
    features: [
      "Installation et configuration de la plateforme (Shopify, WooCommerce...)",
      "Intégration du catalogue produits",
      "Configuration des moyens de paiement et de la livraison",
      "Personnalisation du thème à votre identité",
      "Pages légales et mentions obligatoires",
      "Formation à la gestion de la boutique"
    ],
    icon: ShoppingCart,
    startingPrice: 1200
  },
  {
    id: "refonte-responsive",
    title: "Refonte Responsive",
    description: "Remise à niveau d'un site existant : affichage mobile, vitesse et navigation.",
    longDescription: "Beaucoup de sites encore en ligne ont été conçus avant que le mobile ne devienne majoritaire. Je reprends l'existant, je corrige l'affichage sur petits écrans, j'allège les pages pour qu'elles se chargent plus vite et je revois la navigation si elle pose problème. Je commence toujours par un état des lieux, pour qu'on sache ce qui vaut la peine d'être refait et ce qui peut rester.",
    features: [
      "Audit complet de votre site existant",
      "Design responsive pour mobile, tablette et desktop",
      "Amélioration des performances et de la vitesse",
      "Mise à jour des technologies utilisées",
      "Optimisation de l'expérience utilisateur",
      "Maintenance, hébergement et SEO en option"
    ],
    icon: Smartphone,
    startingPrice: 800
  },
  {
    id: "integration-api",
    title: "Intégration d'API",
    description: "Connexion de votre site à des services externes : paiement, réservation, cartes.",
    longDescription: "Ajouter une fonctionnalité ne veut pas dire la développer entièrement. Paiement en ligne, réservation, cartes, envoi d'e-mails : des services existent déjà et font le travail. Je les branche à votre site, je vérifie le comportement en cas d'erreur, et je vous montre comment vous en servir au quotidien.",
    features: [
      "Analyse des besoins et sélection des API adaptées",
      "Intégration sécurisée et optimisée",
      "Tests approfondis pour garantir la fiabilité",
      "Formation à l'utilisation des nouvelles fonctionnalités",
      "Maintenance et support pour gérer les évolutions au forfait mensuel",
    ],
    icon: Code,
    startingPrice: 800
  },
  {
    id: "frontend",
    title: "Développement Frontend",
    description: "Développement de l'interface : ce que vos visiteurs voient et manipulent.",
    longDescription: "Je développe l'interface de votre site ou de votre application avec React et Next.js. L'objectif est qu'elle soit rapide à charger, utilisable au clavier comme à la souris, et lisible pour les personnes qui naviguent avec un lecteur d'écran. Les animations viennent après : elles servent à rendre l'usage plus clair, pas à faire joli.",
    features: [
      "Développement avec React et Next.js",
      "Animations et transitions fluides",
      "Performance optimisée et temps de chargement réduits",
      "Interfaces accessibles et inclusives",
      "Compatible avec tous les navigateurs modernes",
      "Code propre et maintenable"
    ],
    icon: PenTool,
    startingPrice: 1600
  },
  {
    id: "backend",
    title: "Développement Backend",
    description: "Développement du serveur : données, authentification et logique métier.",
    longDescription: "La partie invisible d'un site : celle qui stocke les données, vérifie qui a le droit d'y accéder et applique vos règles de fonctionnement. Je travaille avec Node.js, Express ou NestJS, et avec PostgreSQL ou MongoDB selon la nature des données. Je documente l'API pour que quelqu'un d'autre puisse reprendre le projet après moi.",
    features: [
      "Architecture de données optimisée",
      "API RESTful",
      "Sécurité renforcée et protection des données",
      "Bases de données relationnelles ou NoSQL",
      "Système d'authentification sécurisé",
      "Documentation API complète"
    ],
    icon: Database,
    startingPrice: 1600
  },
  {
    id: "full-projet",
    title: "Projets Fullstack",
    description: "Prise en charge complète du projet, de la conception à la mise en ligne.",
    longDescription: "Vous avez une idée mais pas d'équipe technique. Je prends le projet du début à la fin : cadrage du besoin, conception, développement du site et du serveur, mise en production et formation à l'outil. On avance par étapes, avec des points réguliers, pour que vous puissiez corriger le tir avant que ce soit coûteux.",
    features: [
      "Analyse des besoins et conception complète",
      "Développement frontend et backend sur mesure",
      "Tests rigoureux à chaque étape",
      "Déploiement et configuration de l'hébergement",
      "Formation à l'utilisation de la solution",
      "Support technique et maintenance",
      "Forfait mensuel en option pour patchs, correctifs et évolutions"
    ],
    icon: Globe,
    startingPrice: 4000
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: "2",
    name: "Herson Studio",
    position: "Studio de musique professionnel",
    company: "hersonstudio.fr",
    content: "Un grand merci à Studio Vega, qui a imaginé, conçu et réalisé le site de Herson Studio de A à Z. Il a tout de suite compris l'univers du studio, et le résultat nous ressemble vraiment. Grâce à son travail, notre image est plus claire, notre offre plus simple à comprendre, et ça nous a déjà amené de nouveaux clients. Ça a été un vrai plaisir de travailler avec lui, et si vous cherchez quelqu'un de confiance pour votre site, on vous le recommande sincèrement.",
    rating: 5
  },
  {
    id: "3",
    name: "Alexandre Dufour",
    position: "Fondateur",
    company: "Stonebridge",
    content: "Guilhem a travaillé sur le site de Stonebridge avec sérieux et professionnalisme. Le travail a été livré dans les délais, avec une bonne écoute des besoins et des retours pris en compte rapidement. Je recommande.",
    rating: 5
  },
  {
    id: "4",
    name: "Club d'Astronomie de Toussaint",
    position: "Club d'astronomie amateur",
    company: "astrotoussaint76.vercel.app",
    content: "Studio Vega nous a proposé de refaire notre blog, et c'est très réussi. Il a modernisé le design et rendu plus simple la navigation. Studio Vega n'a pas hésité à nous proposer plusieurs fonctionnalités très pertinentes, et qui rendent le produit vraiment intéressant.",
    rating: 5
  },
  {
    id: "1",
    name: "Alex",
    position: "CEO",
    company: "Turbo Club",
    content: "Très satisfait du travail réalisé pour mon site Turbo Club. Une approche professionnelle, réactive et attentive à l'univers premium que je souhaitais créer. Merci pour cette collaboration de qualité.",
    rating: 5
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "SCSS", "Vanilla JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "a11y", "SEO", "Responsive Design", ]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Auth & Sécurité", "Bcrypt", "REST API", "WebSockets"]
  },
  {
    title: "Base de données",
    skills: ["Modélisation", "CRUD", "Migration", "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "Mongoose", "Sequelize", "Supabase", "pgAdmin"]
  },
  {
    title: "Devops",
    skills: ["Linux", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "Digital Ocean", "Render"]
  },
  {
    title: "Outils",
    skills: ["Git", "Figma", "VS Code", "Trae", "Webpack", "Web Inspector", "Notion", "Resend", "ESLint", "Prettier", "Postman"]
  },
  {
    title: "Intelligence Artificielle (notions)",
    skills: ["Langchain.js", "OpenAI", "Bases de Python"]
  }
];

export const setupItems = [
  {
    title: "Hardware",
    items: [
      "MacBook Pro 13″ 2,8GHz i7",
      "Écran Acer 24″ Full HD incurvé",
      "Écran iiyama 22″ vertical",
      "Apple Magic Keybord",
      "Apple Magic Mouse",
      "iMac 27″ 2017 sous Arch Linux"
    ]
  },
  {
    title: "Software", 
    items: [
      "Trae",
      "Warp avec Oh My Zsh",
      "Docker Desktop",
      "Figma pour le design",
      "Notion pour la gestion de projet",
      "Arc comme navigateur principal"
    ]
  }
];