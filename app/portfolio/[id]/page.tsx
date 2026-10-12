import { notFound } from "next/navigation";
import ProjectGallery from "@/components/project-gallery";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { featuredProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

// ✅ Corrigé pour Next.js 15.3.1 : params est une promesse
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Le projet demandé n'existe pas ou a été supprimé.",
    };
  }

  return {
    title: project.title,
    description: project.fullDescription,
    openGraph: {
      title: project.title,
      description: project.fullDescription,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: `Aperçu du projet ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.fullDescription,
      images: [project.imageUrl],
    },
  };
}

// Pas besoin de modifier cette fonction
export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    id: project.id,
  }));
}

// ✅ Correction ici aussi : destructuration asynchrone de params
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Button variant="outline" size="sm" className="mb-8" asChild>
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Link>
        </Button>

        {/* Le h1 ouvre la page, l'image l'illustre. La stack est déplacée en
            encart à droite du texte (voir plus bas). */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{project.title}</h1>

        {/* Galerie pleine largeur. `object-contain` + `bg-card` : les captures
            iPhone (9:16) restent entières et centrées au lieu d'être recadrées. */}
        <div className="mb-8">
          <ProjectGallery
            images={project.gallery ?? [project.imageUrl]}
            video={
              project.videoUrl
                ? { src: project.videoUrl, poster: project.videoPoster }
                : undefined
            }
            title={project.title}
          />
        </div>

        {/* Rangée conditionnelle : sans lien, un conteneur vide laisserait
            une marge de 48px entre la galerie et le texte. */}
        {project.liveUrl && (
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Site live
              </a>
            </Button>
          </div>
        )}

        {/* Deux colonnes : le texte garde une mesure lisible et la stack occupe
            la place restée vide à droite, au lieu d'être une ligne sous le titre.
            Sur mobile l'encart repasse au-dessus du texte (order-first) pour
            conserver la visibilité qu'avaient les badges. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 max-w-3xl">
            <p className="text-muted-foreground mb-8">
              {project.fullDescription}
            </p>

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

          <aside className="order-first lg:order-none">
            <Card className="lg:sticky lg:top-24">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Stack technique</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} className="bg-amber-soft text-amber-deep border-transparent hover:bg-amber-soft">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
