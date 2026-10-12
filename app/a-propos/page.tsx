import { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories, setupItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Mon parcours, de la musique au développement web, et les technologies avec lesquelles je travaille.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="section-title">À Propos de Moi</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Développeur web fullstack en freelance, installé entre le web et le mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/projects/about-developer.jpg"
                alt="Développeur Web"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-deep/50 to-transparent mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Mon Parcours</h2>
            <p className="text-foreground/80 mb-4">
              Avant de coder, j'ai passé plusieurs années dans la musique. Et puis un jour j'ai eu envie de comprendre comment tournait un site web, et je ne m'en suis plus arrêté : quelques mois à bidouiller tout seul, puis une formation intensive chez O'Clock, spécialisée en accessibilité, pour structurer tout ça sérieusement.
            </p>
            <p className="text-foreground/80 mb-4">
              Depuis, je code aussi bien pour le web que pour mobile en iOS. J'ai un faible pour l'écosystème JavaScript, React et Node.js en tête, mais ce que je préfère, c'est construire des interfaces qui tournent bien, qui chargent vite et qui restent accessibles. Pas seulement jolies sur une maquette Figma.
            </p>
            <p className="text-foreground/80">
              Je n'ai jamais vraiment arrêté d'apprendre depuis mes débuts. Nouveau framework, nouvelle techno, bug bizarre à débugger un dimanche soir : j'y vais, je teste, parfois ça casse, mais c'est comme ça qu'on progresse.
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
                      <Badge key={skill} className="bg-amber-soft text-amber-deep border-transparent hover:bg-amber-soft">
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
              Coder ressemble un peu à la musique : il faut de la structure et de la rigueur, mais il reste de la place pour choisir comment faire les choses. Rien ne vaut le moment où, après s'être pris la tête pendant des heures sur un bug ou une architecture trop compliquée, tout finit par cliquer.
            </p>
            <p className="text-foreground/80 mb-4">
              Ce que j'aime dans ce métier, c'est qu'aucun projet ne ressemble au précédent. Chaque client, chaque idée amène ses propres contraintes, et c'est justement ça qui rend le travail intéressant. Voir un site que j'ai construit être réellement utilisé par des gens, ça reste la meilleure partie du boulot.
            </p>
            <p className="text-foreground/80">
              Le web change vite, il y a toujours un nouvel outil à tester ou une meilleure façon de faire les choses. Je préfère largement ça à la routine, et c'est sans doute pour ça que je ne m'en lasse pas.
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