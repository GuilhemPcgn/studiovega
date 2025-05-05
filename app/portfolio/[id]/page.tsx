// app/portfolio/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";
import { featuredProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";

// ✅ Nécessaire pour next export
export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = featuredProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // meilleure pratique que de renvoyer un composant custom
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Button
          variant="outline"
          size="sm"
          className="mb-8"
          asChild
        >
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {project.videoUrl && (
              <Dialog>
                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      src={project.videoUrl}
                      title={`Démo de ${project.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code source
                  </a>
                </Button>
              )}

              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Site live
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Contexte</h2>
                <p className="text-foreground/80">{project.context}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Défis rencontrés</h2>
                <p className="text-foreground/80">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Solutions</h2>
                <p className="text-foreground/80">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
