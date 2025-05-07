import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold gradient-text">SV</span>
            <p className="mt-4 text-muted-foreground">
              Développeur web fullstack passionné par la création d'expériences
              web uniques et performantes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-secondary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-secondary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@studiovega.dev"
                  className="hover:underline text-foreground/80"
                >
                  contact@studiovega.dev
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+33786444061"
                  className="hover:underline text-foreground/80"
                >
                  +33 7 86 44 40 61
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <Link
                href="https://github.com/GuilhemPcgn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/guilhempcgn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com/madcat_music"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} | Tous droits réservés
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Mentions Légales
            </Link>
            <span className="mx-2 text-muted-foreground">•</span>
            <Link href="/rgpd" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              RGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}