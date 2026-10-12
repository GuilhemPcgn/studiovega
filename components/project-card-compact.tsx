import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ProjectType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardCompactProps {
  project: ProjectType;
}

/**
 * Carte de second niveau : pas de visuel, une ligne par projet.
 * Volontairement plus légère que ProjectCard pour que la hiérarchie
 * entre projets phares et autres réalisations reste lisible.
 */
export default function ProjectCardCompact({ project }: ProjectCardCompactProps) {
  return (
    <Card className="relative card-hover bg-page border-subtle">
      <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-grow">
          <div className="flex items-baseline gap-3 flex-wrap mb-1">
            <h3 className="text-base font-semibold">{project.title}</h3>
            <span className="text-xs text-muted-foreground shrink-0">
              {project.date.replace("-", "/")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} className="text-xs bg-amber-soft text-amber-deep border-transparent hover:bg-amber-soft">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline" className="text-xs border-subtle text-dim">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2 shrink-0">
          {/* Lien étendu : couvre toute la carte (cf. ProjectCard). */}
          <Link
            href={`/portfolio/${project.id}`}
            className="text-sm font-medium flex items-center text-amber-hover hover:text-amber-deep transition-colors whitespace-nowrap after:absolute after:inset-0 after:content-['']"
          >
            Voir détails
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
          <div className="relative z-10 flex items-center gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-secondary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Site en ligne — {project.title}</span>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
