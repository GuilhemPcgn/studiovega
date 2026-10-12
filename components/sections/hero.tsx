"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { particleAnimation } from "@/lib/particle-animation";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      particleAnimation(canvasRef.current);
    }

    return () => {
      // Cleanup function
      if (canvasRef.current) {
        const context = canvasRef.current.getContext("2d");
        if (context) {
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
  }, []);

  return (
    <section className="on-dark relative min-h-screen flex items-center">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-section/20 via-dark-section/60 to-dark-section z-10" />
      
      <div className="container mx-auto px-4 relative z-20 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text font-bold text-6xl">Studio Vega</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold mb-6 text-on-dark">Développeur Web Fullstack</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-dim-on-dark mb-8">
              Je conçois et développe des sites et des applications web, de la maquette à la mise en ligne.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild className="btn-primary">
              <Link href="/portfolio">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-dim-on-dark hover:text-on-dark transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}