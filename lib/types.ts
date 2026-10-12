import { DivideIcon as LucideIcon } from "lucide-react";

export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  context: string;
  challenge: string;
  solution: string;
  /** Visuel unique : vignette des cartes et image OpenGraph. */
  imageUrl: string;
  /** Galerie de la page de détail. Si absent, `imageUrl` est utilisée seule. */
  gallery?: string[];
  videoUrl?: string;
  /** Poster de la vidéo, pour ne rien télécharger avant le clic. */
  videoPoster?: string;
  liveUrl?: string;
  techStack: string[];
  date: string;
  /** Projet phare : grande carte en haut du portfolio et sur la page d'accueil. */
  featured?: boolean;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: typeof LucideIcon;
  startingPrice: number;
}

export interface TestimonialType {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating: number;
}