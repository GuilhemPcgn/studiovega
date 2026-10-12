"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ProjectType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative overflow-hidden card-hover h-full flex flex-col bg-page border-subtle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-deep/55 to-transparent" />
        
        {/* Tech stack badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} className="text-xs bg-amber-soft text-amber-deep border-transparent hover:bg-amber-soft">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="outline" className="text-xs border-subtle text-dim">+{project.techStack.length - 3}</Badge>
          )}
        </div>
      </div>
      
      <CardContent className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {project.shortDescription}
        </p>
        
        <div className="flex items-center mt-auto">
          {/* Lien étendu : le pseudo-élément couvre toute la carte, ce qui la rend
              cliquable sans imbriquer de <a> ni dupliquer les cibles au clavier. */}
          <Link 
            href={`/portfolio/${project.id}`}
            className="text-sm font-medium flex items-center text-amber-hover hover:text-amber-deep transition-colors after:absolute after:inset-0 after:content-['']"
          >
            Voir détails
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}