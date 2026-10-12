"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTAContact() {
  return (
    <section className="py-24 relative overflow-hidden bg-elevated">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">
            Un projet en tête ?
          </h2>
          <p className="text-lg md:text-xl text-dim mb-8">
            Expliquez-moi ce que vous avez en tête. Je vous dis si je peux le faire, comment, et à quel prix.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/contact">
              Me contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}