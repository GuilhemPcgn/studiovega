import { Metadata } from "next";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
  title: "Portfolio | Développeur Web Fullstack",
  description: "Découvrez mes projets de développement web et les solutions que j'ai créées",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="section-title">Mes Projets</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Une sélection de mes réalisations récentes en développement web fullstack.
            Chaque projet représente un défi unique que j'ai relevé avec passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}