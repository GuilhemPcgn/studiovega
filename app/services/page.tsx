import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services | Développeur Web Fullstack",
  description: "Découvrez mes services de développement web, de la création de sites vitrines aux applications sur mesure",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="section-title">Mes Services</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Des solutions web adaptées à vos besoins, pour tous types de projets et budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <Card key={service.id} className="card-hover h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-foreground/80 mb-6">{service.longDescription}</p>
                
                <div className="mb-6 flex-grow">
                  <h3 className="text-lg font-semibold mb-3">Ce qui est inclus :</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-xl font-medium gradient-text">
                    À partir de {service.startingPrice}€
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Comment je travaille</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-foreground/80">
                Nous discutons de votre projet, de vos objectifs et de vos besoins pour établir un cahier des charges précis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Proposition</h3>
              <p className="text-foreground/80">
                Je vous présente une proposition détaillée avec planning, fonctionnalités et tarifs adaptés à votre projet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Réalisation</h3>
              <p className="text-foreground/80">
                Je développe votre projet avec des points d'étape réguliers pour vous assurer que tout correspond à vos attentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}