"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { TestimonialType } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

// Au-delà de ce seuil, la grille passe en carrousel pour éviter un mur de cartes.
const CAROUSEL_THRESHOLD = 3;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
    return (
        <Card className="h-full card-hover">
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                        {testimonial.avatarUrl && (
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                        )}
                        <AvatarFallback className="bg-amber-soft text-amber-deep font-semibold">
                            {getInitials(testimonial.name)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                            {testimonial.position} - {testimonial.company}
                        </p>
                    </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 fill-secondary text-secondary"
                        />
                    ))}
                </div>

                <p className="text-foreground/80 italic">
                    "{testimonial.content}"
                </p>
            </CardContent>
        </Card>
    );
}

export default function Testimonials() {
    if (testimonials.length === 0) return null;

    const useCarousel = testimonials.length > CAROUSEL_THRESHOLD;

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Avis Clients</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            Les retours des clients avec qui j'ai travaillé.
                        </p>
                    </motion.div>
                </div>

                {useCarousel ? (
                    <>
                        {/* Mobile : liste empilée. Glisser latéralement n'est pas intuitif
                            sur petit écran, le carrousel ne démarre qu'à partir de md. */}
                        <div className="grid grid-cols-1 gap-8 max-w-xl mx-auto md:hidden">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </motion.div>
                            ))}
                        </div>

                        <Carousel
                            opts={{ align: "start", loop: true }}
                            className="hidden md:block max-w-6xl mx-auto"
                        >
                            <CarouselContent className="-ml-4">
                                {testimonials.map((testimonial) => (
                                    <CarouselItem
                                        key={testimonial.id}
                                        className="pl-4 md:basis-1/2 lg:basis-1/3"
                                    >
                                        <TestimonialCard testimonial={testimonial} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </>
                ) : (
                    // Peu de témoignages : grille centrée, dimensionnée sur le nombre réel
                    // pour éviter une carte isolée en haut à gauche d'une grille 3 colonnes.
                    <div
                        className={`grid gap-8 mx-auto ${
                            testimonials.length === 1
                                ? "grid-cols-1 max-w-xl"
                                : testimonials.length === 2
                                ? "grid-cols-1 md:grid-cols-2 max-w-4xl"
                                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        }`}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
