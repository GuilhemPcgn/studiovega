import { Metadata } from "next";
import { Github, Linkedin, Instagram, Mail, Phone, Briefcase } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Me contacter pour un projet web : site vitrine, application ou refonte.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="section-title">Me Contacter</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Une question, un devis, ou juste une idée à dégrossir : écrivez-moi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div>
            <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Informations de contact</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">contact@studiovega.dev</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p className="text-foreground">+33 786 444 061</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Disponibilité</p>
                    <p className="text-foreground">
                      Freelance — également ouvert à un poste en CDI à temps partiel,
                      en parallèle de mon activité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Retrouvez-moi</h2>
              <div className="flex flex-col space-y-4">
                <a href="https://github.com/GuilhemPcgn" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-secondary transition-colors">
                  <Github className="h-5 w-5 mr-3" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/guilhempcgn/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-secondary transition-colors">
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/madcat_music/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5 mr-3" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
