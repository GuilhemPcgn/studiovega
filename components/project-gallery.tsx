"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  /** Ajoutée en dernier slide : sur un projet d'animation, la démo est le point d'orgue. */
  video?: { src: string; poster?: string };
  title: string;
}

type Item =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

export default function ProjectGallery({ images, video, title }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const items: Item[] = [
    ...images.map((src) => ({ type: "image" as const, src })),
    ...(video ? [{ type: "video" as const, ...video }] : []),
  ];
  const count = items.length;
  const videoIndex = video ? count - 1 : -1;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count]
  );

  // Quitter le slide vidéo coupe la lecture : sinon le son continue
  // alors qu'on regarde une image.
  useEffect(() => {
    if (index !== videoIndex) videoRef.current?.pause();
  }, [index, videoIndex]);

  useEffect(() => {
    if (count < 2) return;
    const onKey = (e: KeyboardEvent) => {
      // Focus dans la vidéo : les flèches servent à s'y déplacer, pas à
      // changer de slide.
      const v = videoRef.current;
      if (v && (e.target === v || document.activeElement === v)) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [count, go]);

  return (
    <div>
      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-card">
        {items.map((item, i) => (
          <div
            key={item.src}
            // Toutes les vues restent montées et se croisent en fondu : pas de
            // rechargement ni de saut de mise en page au changement.
            className={`absolute inset-0 transition-opacity duration-300 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`${title} — visuel ${i + 1} sur ${count}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority={i === 0}
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  src={item.src}
                  poster={item.poster}
                  controls
                  preload="none"
                  playsInline
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  className="h-full w-full object-contain"
                />
                {/* Sans ça, le poster passe pour une image de plus et
                    personne ne lance la démo. */}
                {!playing && (
                  <button
                    type="button"
                    onClick={() => videoRef.current?.play()}
                    aria-label={`Lire la démo vidéo de ${title}`}
                    className="absolute inset-x-0 top-0 bottom-14 flex items-center justify-center bg-background/30 transition-colors hover:bg-background/20"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border">
                      <Play className="h-7 w-7 translate-x-0.5 text-secondary fill-secondary" />
                    </span>
                  </button>
                )}
              </>
            )}
          </div>
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Visuel précédent"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background hover:text-secondary transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Visuel suivant"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background hover:text-secondary transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              className={`absolute right-3 z-10 rounded-full bg-background/70 backdrop-blur-sm border border-border px-3 py-1 text-xs text-foreground/80 transition-all ${
                items[index].type === "video" ? "bottom-16" : "bottom-3"
              }`}
            >
              {index + 1} / {count}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={
                item.type === "video"
                  ? "Aller à la démo vidéo"
                  : `Aller au visuel ${i + 1}`
              }
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-secondary"
                  : "w-2 bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Annonce le changement aux lecteurs d'écran, qui ne voient pas le fondu. */}
      <p className="sr-only" aria-live="polite">
        {items[index].type === "video" ? "Démo vidéo" : `Visuel ${index + 1}`} sur {count}
      </p>
    </div>
  );
}
