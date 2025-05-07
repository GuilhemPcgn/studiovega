"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
      
      <div className="container mx-auto px-4 relative z-20 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-400 bg-clip-text text-transparent font-bold text-6xl">Studio Vega</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold mb-6">Développeur Web Fullstack</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Des expériences web modernes, élégantes et performantes pour donner vie à vos projets digitaux.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild className="btn-primary bg-gradient-to-r from-purple-600 via-purple-500 to-blue-400">
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
    </section>
  );
}