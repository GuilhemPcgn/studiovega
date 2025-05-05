import { DivideIcon as LucideIcon } from "lucide-react";

export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  context: string;
  challenge: string;
  solution: string;
  imageUrl: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
  date: string;
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
  avatarUrl: string;
  rating: number;
}