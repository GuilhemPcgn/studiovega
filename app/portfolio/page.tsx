import { Metadata } from "next";
import { highlightedProjects, otherProjects } from "@/lib/data";
import ProjectCard from "@/components/project-card";
import ProjectCardCompact from "@/components/project-card-compact";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projets web fullstack récents : contexte, contraintes techniques et solutions retenues.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="section-title">Mes Projets</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Quelques projets récents. Pour chacun, le contexte, la contrainte principale
            et la façon dont je l'ai traitée.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-2">Projets phares</h2>
          <p className="text-muted-foreground mb-8">
            Les réalisations les plus représentatives de ce que je sais faire aujourd'hui.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlightedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-2">Autres réalisations</h2>
            <p className="text-muted-foreground mb-8">
              Projets plus anciens ou de plus petite envergure, toujours consultables en détail.
            </p>
            <div className="flex flex-col gap-4">
              {otherProjects.map((project) => (
                <ProjectCardCompact key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
