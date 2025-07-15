import { 
  Layout, 
  Code, 
  Smartphone, 
  Database, 
  PenTool, 
  Globe,
  Server
} from "lucide-react";
import { ProjectType, ServiceType, TestimonialType } from "./types";

export const featuredProjects: ProjectType[] = [
  {
    id: "allyia-website",
    title: "Allyia - Site officiel de l'application de santé mentale",
    shortDescription: "Site vitrine de l'application Allyia, dédiée à la santé mentale assistée par IA.",
    fullDescription: "Le site web d'Allyia est la plateforme centrale de présentation de notre application de santé mentale. Il a été conçu pour informer, rassurer et engager nos utilisateurs. On y retrouve une présentation détaillée des fonctionnalités de l'application, des articles du blog sur la santé mentale, des témoignages, un formulaire d'inscription à la newsletter, ainsi qu'un espace pour rejoindre notre serveur Discord. L'identité visuelle a été travaillée pour inspirer confiance, sérénité et innovation.",
    context: "Ce site a été développé pour accompagner le lancement de notre start-up Allyia. Il sert à la fois de point d'entrée pour les utilisateurs, de support de communication, et de base pour nos actions marketing (SEO, réseaux sociaux, newsletters, etc.).",
    challenge: "Le défi principal a été de structurer un site à la fois esthétique, accessible et performant, tout en assurant une cohérence forte avec la mission sensible d'Allyia : accompagner les personnes dans la gestion de leur santé mentale.",
    solution: "J’ai conçu une architecture claire en utilisant Next.js avec l’App Router, optimisé le SEO dès le départ, et intégré des outils modernes pour les formulaires, l’authentification et la gestion des contenus. Le site est déjà en ligne et évolue au fil des retours utilisateurs.",
    imageUrl: "/images/Allyia_Website.png",
    githubUrl: "https://github.com/GuilhemPcgn/site-allyia",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn/ui", "Brevo", "OpenGraph SEO"],
    date: "2025-06"
  },
  {
    id: "greenroots",
    title: "Greenroots - Réduire son bilan Co2 en plantant des arbres",
    shortDescription: "Plateforme d'achat d'arbres pour réduire son empreinte carbone, paiement sécurisé et suivis de la vie de l'arbre",
    fullDescription: "Votre plateforme éco-responsable dédiée à la reforestation et à la préservation de notre planète. Chez GreenRoots, nous croyons qu'il est possible de faire une différence, un arbre à la fois. Nous vous offrons la possibilité de participer activement à la lutte contre le changement climatique en achetant des arbres à planter.",
    context: "Projet de fin d'études de l'école O'Clock, projet en groupe de quatre, réalisé fin 2024.",
    challenge: "Le principal défi était de développer une interface utilisateur intuitive tout en intégrant des fonctionnalités avancées comme le paiement en ligne, la gestion des stocks et un tableau de bord administratif complet.",
    solution: "Nous avons développé une application full backend avec Node.js, Express et le templates EJS, en essayant de fournir une edxpérience utilisateur la plus simple d'accès.",
    imageUrl: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://example.com/video.mp4",
    githubUrl: "https://github.com/GuilhemPcgn/final-greenroots.git",
    liveUrl: "https://greenroots-3w7wi.ondigitalocean.app/",
    techStack: ["EJS", "CSS", "Node.js", "Express", "PostgreSQL", "Digital Ocean"],
    date: "2024-11"
  },
  {
    id: "allyia-blog",
    title: "Allyia - Blog Santé Mentale",
    shortDescription: "Blog parlant de santé mentale, affilié à l'application Allyia",
    fullDescription: "Allyia est une application de gestion de sa santé mentale, ce blog est donc fait pour discuter et destigmatiser les sujets liés à la santé mentale.",
    context: "Blog crée dans le contexte du developpepment de la plateforme Allyia",
    challenge: "Le but était de créer une interface agréable et lisible, pour que l'utilisateur se sente bien et revienne régulièrement pour se tenir au courant.",
    solution: "J'ai développé un site uniquement frontend en utilisant Next.js et Tailwind CSS. Etant donné que je suis le seul à rajouter des articles, j'utilise un fichier en JSON pour les stocker.",
    imageUrl: "https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=1600",
    githubUrl: "https://github.com/GuilhemPcgn/allyia-blog.git",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    date: "2025-04"
  },
  {
    id: "turbo-club",
    title: "Turbo Club - Expérience Formule 1 VIP",
    shortDescription: "Plateforme de vente de billet pour une soirée VIP autur de la Formule 1.",
    fullDescription: "Organisation d'événements exclusifs qui permettent aux passionnés de Formule 1 de rencontrer les plus grands pilotes dans un cadre privilégié et intimiste. Chaque événement est minutieusement préparé pour garantir une expérience inoubliable.",
    context: "L'organisateur souhaitait un site web premium reflétant l'exclusivité de leurs soirées et permettant un paiement sécurisé pour leurs clients exigeants.",
    challenge: "Le défi était de créer une interface élégante et performante capable d'attirer et de convaincre l'utilisateur.",
    solution: "J'ai conçu un site web sur mesure et le plus simple d'utilisation. Le délai était très court, le site fonctionne donc sans back, et Stripe est utilisé avec Checkout sans API directement dans le code, juste.",
    imageUrl: "https://images.pexels.com/photos/30205195/pexels-photo-30205195/free-photo-of-voiture-de-course-de-formule-1-rouge-sur-la-piste.jpeg?auto=compress&cs=tinysrgb&w=1600",
    githubUrl: "https://github.com/GuilhemPcgn/projet-alex.git",
    liveUrl: "https://turboclub.vip",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Stripe", "Netlify"],
    date: "2025-04"
  },
  {
    id: "allyia-app",
    title: "Allyia - Application de gestion de santé mentale",
    shortDescription: "Application de gestion de sa santé mentale grâce a plusieurs fonctionnalitées",
    fullDescription: "Allyia est une application de gestion de sa santé mentale, à travers divers outils comme la gestion des ordonnances et des médicaments, mais également d'un chatbot entrainé sur la psychologie étant capable de prendre en main les soucis du quotidien en attendant un vrai rendez-vous.",
    context: "Avec un ami nous avons décidé de créer une start-up concentré sur ce sujet important pour nous. Grâce à nos expériences personnelles nous avons créé cet outil tournée sur l'intelligence artificielle, pour qu'elle soit le plus pertinente possible.",
    challenge: "Le fait de développer une application fullstack avec des fonctionnalités avancées comme l'intelligence artificielle était un vrai défi pour moi, surtout quelques mois après la sortie d'école.",
    solution: "Le projet est toujours en cours de développement, mais je suis très content de ce que j'ai déjà pu réaliser.",
    imageUrl: "/images/Typo_Allyia.png",
    githubUrl: "https://github.com",
    techStack:  ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB", "Firebase Auth", "Langchain.js", "OpenAI"],
    date: "2023-07"
  },
];

export const services: ServiceType[] = [
  {
    id: "site-vitrine",
    title: "Création de Site Vitrine",
    description: "Sites web professionnels et modernes pour présenter votre activité ou votre entreprise.",
    longDescription: "Je conçois des sites vitrines sur mesure qui mettent en valeur votre marque et vos services. Chaque site est optimisé pour les moteurs de recherche, responsive pour tous les appareils et conçu pour convertir les visiteurs en clients.",
    features: [
      "Design sur mesure adapté à votre identité",
      "Optimisation SEO pour un meilleur référencement",
      "Responsive design pour tous les appareils",
      "Intégration de formulaires de contact",
      "Hébergement et maintenance disponibles",
      "Formation à l'utilisation du site"
    ],
    icon: Layout,
    startingPrice: 800
  },
  {
    id: "refonte-responsive",
    title: "Refonte Responsive",
    description: "Modernisation de sites existants avec adaptation optimale pour tous les appareils.",
    longDescription: "Je transforme votre site web existant en une version moderne et responsive qui s'adapte parfaitement à tous les écrans. La refonte inclut l'amélioration de l'architecture, de la navigation et des performances pour une meilleure expérience utilisateur.",
    features: [
      "Audit complet de votre site existant",
      "Design responsive pour mobile, tablette et desktop",
      "Amélioration des performances et de la vitesse",
      "Mise à jour des technologies utilisées",
      "Optimisation de l'expérience utilisateur",
      "Maintenance, hébergement et SEO en option"
    ],
    icon: Smartphone,
    startingPrice: 900
  },
  {
    id: "integration-api",
    title: "Intégration d'API",
    description: "Connexion de votre site à des services tiers pour ajouter des fonctionnalités avancées.",
    longDescription: "J'intègre des API tierces à votre site ou application pour ajouter des fonctionnalités avancées comme les paiements en ligne, les réseaux sociaux, les cartes interactives ou les systèmes de réservation, tout en assurant une expérience utilisateur fluide.",
    features: [
      "Analyse des besoins et sélection des API adaptées",
      "Intégration sécurisée et optimisée",
      "Tests approfondis pour garantir la fiabilité",
      "Formation à l'utilisation des nouvelles fonctionnalités",
      "Maintenance et support pour gérer les évolutions au forfait mensuel",
    ],
    icon: Code,
    startingPrice: 650
  },
  {
    id: "frontend",
    title: "Développement Frontend",
    description: "Interfaces utilisateur modernes, intuitives et interactives avec les dernières technologies.",
    longDescription: "Je développe des interfaces utilisateur performantes et esthétiques en utilisant les frameworks modernes comme React, Vue ou Angular. Chaque interface est conçue pour offrir une expérience utilisateur optimale avec des animations fluides et un design soigné.",
    features: [
      "Développement avec React et Next.js",
      "Animations et transitions fluides",
      "Performance optimisée et temps de chargement réduits",
      "Interfaces accessibles et inclusives",
      "Compatible avec tous les navigateurs modernes",
      "Code propre et maintenable"
    ],
    icon: PenTool,
    startingPrice: 1100
  },
  {
    id: "backend",
    title: "Développement Backend",
    description: "Systèmes robustes et sécurisés pour gérer vos données et processus métier.",
    longDescription: "Je crée des systèmes backend puissants et sécurisés qui gèrent efficacement vos données et processus métier. Mes solutions backend sont construites avec des technologies fiables comme Node.js, Express, MongoDB ou PostgreSQL pour assurer stabilité et performances.",
    features: [
      "Architecture de données optimisée",
      "API RESTful",
      "Sécurité renforcée et protection des données",
      "Bases de données relationnelles ou NoSQL",
      "Système d'authentification sécurisé",
      "Documentation API complète"
    ],
    icon: Database,
    startingPrice: 1000
  },
  {
    id: "full-projet",
    title: "Projets Fullstack",
    description: "Solutions web complètes de A à Z, du design à l'hébergement, avec suivi personnalisé.",
    longDescription: "Je prends en charge votre projet web de A à Z, de la conception à la mise en production. Chaque projet bénéficie d'un suivi personnalisé et d'une approche globale intégrant frontend, backend, bases de données et déploiement pour un résultat cohérent et performant.",
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
    startingPrice: 1500
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "Alexandre Dufour",
    position: "CEO",
    company: "Turbo Club",
    content: "Très satisfait du travail réalisé pour mon site Turbo Club. Une approche professionnelle, réactive et attentive à l’univers premium que je souhaitais créer. Merci pour cette collaboration de qualité.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymQCpduSHTcEUIMCXhhwPAnZDXlq98198JQ&s",
    rating: 5
  },
  // {
  //   id: "2",
  //   name: "Thomas Dubois",
  //   position: "Fondateur",
  //   company: "HealthConnect",
  //   content: "Notre application de suivi de santé avait des exigences techniques complexes, mais tout a été implémenté parfaitement. Le code est propre, bien documenté et facile à maintenir. Un vrai professionnel!",
  //   avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   rating: 5
  // },
  // {
  //   id: "3",
  //   name: "Émilie Lefèvre",
  //   position: "Responsable Digital",
  //   company: "Luxe Immobilier",
  //   content: "La refonte de notre site immobilier a transformé notre présence en ligne. L'interface est élégante et les fonctionnalités de recherche avancées ont considérablement amélioré l'expérience utilisateur.",
  //   avatarUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   rating: 4
  // }
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
    title: "Intelligence Artificielle",
    skills: ["Langchain.js", "TenserFlow.js", "Base de Python", "OpenAI", "PyTorch", "Jupyter Notebook", "Hugging Face"]
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

// export const aboutAnecdotes = [
//   "J'ai écrit ma première ligne de code à 12 ans sur un vieux PC familial",
//   "Je code en écoutant principalement du jazz et de la lo-fi",
//   "J'ai participé à plusieurs hackathons et gagné le prix de l'innovation en 2022",
//   "Je contribue régulièrement à des projets open source",
//   "Je maintiens un blog technique où je partage mes apprentissages"
// ];