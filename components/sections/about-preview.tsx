"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGQlQzMlQTl2ZWxvcHBldXIlMjB3ZWJ8ZW58MHx8MHx8fDA%3D"
                alt="Développeur Web"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 to-transparent mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left">À Propos de Moi</h2>
            <p className="text-lg mb-6 text-foreground/80">
              Passionné de développement web depuis quelques années, je conçois des expériences numériques qui combinent esthétique et performance.
            </p>
            <p className="text-lg mb-6 text-foreground/80">
              Mon expertise couvre l'ensemble du spectre du développement web, du frontend au backend, avec une attention particulière pour les technologies modernes et performantes.
            </p>
            <Button asChild variant="outline" className="btn-secondary">
              <Link href="/a-propos">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}