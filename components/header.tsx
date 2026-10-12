"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "À Propos", path: "/a-propos" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // En haut de la page d'accueil, l'en-tête transparent se superpose au hero
  // anthracite : le texte doit alors passer en clair pour rester lisible.
  const overDarkHero = pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-sv.webp"
            alt="Studio Vega"
            width={871}
            height={301}
            priority
            className="h-9 w-auto md:h-10"
          />
          <span
            className={cn(
              "hidden text-lg font-bold sm:inline",
              overDarkHero ? "text-amber-light" : "text-amber-hover"
            )}
          >
            Studio Vega
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors",
                overDarkHero ? "hover:text-amber-light" : "hover:text-amber-hover",
                pathname === item.path
                  ? overDarkHero
                    ? "text-amber-light"
                    : "text-amber-hover"
                  : overDarkHero
                    ? "text-dim-on-dark"
                    : "text-dim"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("ml-2 p-2", overDarkHero ? "text-on-dark" : "text-ink")}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-2 text-sm font-medium transition-colors hover:text-secondary",
                    pathname === item.path
                      ? "text-secondary"
                      : "text-foreground/70"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}