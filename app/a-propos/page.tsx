import { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories, setupItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "À Propos | Développeur Web Fullstack",
  description: "En savoir plus sur mon parcours, mes compétences et ma passion pour le développement web",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="section-title">À Propos de Moi</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Passionné de développement web, je crée des expériences numériques uniques et performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
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
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Mon Parcours</h2>
            <p className="text-foreground/80 mb-4">
              Après plusieurs années d'une carrière musicale, je me lance dans la programmation. Après quelques mois en autodidacte à tâtoner sur plusieurs languages, je me lance dans une formation intensive chez O'Clock de développeur web, spécialisé en accessibilité.
            </p>
            <p className="text-foreground/80 mb-4">
              Ma passion pour le code m'a amené à me spécialiser dans les technologies JavaScript modernes, avec une prédilection pour React et Node.js. Je m'intéresse particulièrement aux interfaces utilisateur innovantes et aux applications web performantes.
            </p>
            <p className="text-foreground/80">
              Je suis constamment en train d'apprendre et d'expérimenter de nouvelles technologies pour proposer les meilleures solutions à mes clients. Mon objectif est de créer des applications web qui allient esthétique, performance et facilité d'utilisation.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Mes Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Pourquoi je suis développeur</h2>
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <p className="text-foreground/80 mb-4">
              Le développement web est pour moi bien plus qu'un métier — c'est une passion qui me permet de combiner créativité et résolution de problèmes. Ce que j'aime particulièrement, c'est le sentiment de satisfaction quand une solution élégante émerge d'un défi technique complexe.
            </p>
            <p className="text-foreground/80 mb-4">
              Chaque projet est une opportunité d'apprendre et de progresser. J'apprécie la diversité des problématiques rencontrées et la possibilité de créer des solutions qui ont un impact réel sur les utilisateurs et les entreprises.
            </p>
            <p className="text-foreground/80">
              La technologie évolue constamment, et cette évolution permanente est ce qui rend ce métier si passionnant. Je reste curieux et enthousiaste face aux nouveaux outils et frameworks qui nous permettent de repousser les limites de ce qui est possible sur le web.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Mon Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {setupItems.map((setup, index) => (
              <Card key={index} className="card-hover h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{setup.title}</h3>
                  <ul className="space-y-2">
                    {setup.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}