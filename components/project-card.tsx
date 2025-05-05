"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
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
      className="overflow-hidden card-hover h-full flex flex-col"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Tech stack badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="outline" className="text-xs">+{project.techStack.length - 3}</Badge>
          )}
        </div>
      </div>
      
      <CardContent className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {project.shortDescription}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <Link 
            href={`/portfolio/${project.id}`}
            className="text-sm font-medium flex items-center text-secondary hover:text-secondary/80 transition-colors"
          >
            Voir détails
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
          
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-secondary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}