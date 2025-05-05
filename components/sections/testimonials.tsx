"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
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
                            Ce que disent mes clients à propos de mon travail et de notre collaboration.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full card-hover">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.avatarUrl}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}