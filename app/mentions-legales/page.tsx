import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Studio Vega",
};

function ToFill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-destructive/10 px-1.5 py-0.5 font-medium text-destructive">
      {children}
    </span>
  );
}

export default function LegalPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Mentions Légales</h1>

          <Card>
            <CardContent className="p-8 space-y-8 text-foreground/80">
              <p className="text-sm">
                Certaines informations ci-dessous restent à compléter avant mise en ligne définitive
                (elles sont mises en évidence en <ToFill>rouge</ToFill>).
              </p>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">1. Éditeur du site</h2>
                <p className="mb-2">
                  Le présent site est édité par <ToFill>[Nom / raison sociale]</ToFill>, développeur web
                  fullstack indépendant.
                </p>
                <p className="mb-2">
                  Statut : <ToFill>[Statut juridique, ex. auto-entrepreneur]</ToFill>
                  <br />
                  Adresse : <ToFill>[Adresse]</ToFill>
                  <br />
                  Téléphone : +33 7 86 44 40 61
                  <br />
                  Email : contact@studiovega.dev
                </p>
                <p>
                  SIRET : <ToFill>[Numéro SIRET]</ToFill>
                  <br />
                  TVA intracommunautaire : <ToFill>[Numéro TVA, le cas échéant]</ToFill>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">2. Hébergement</h2>
                <p>
                  Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">3. Propriété intellectuelle</h2>
                <p className="mb-2">
                  L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies,
                  images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses,
                  bases de données, etc.) ainsi que le site lui-même, relèvent des législations françaises et
                  internationales sur le droit d'auteur et la propriété intellectuelle.
                </p>
                <p>
                  Ces éléments sont la propriété exclusive de l'éditeur du site. Toute reproduction ou
                  représentation, en tout ou partie, sur un quelconque support est interdite sans autorisation
                  préalable et écrite.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">4. Liens hypertextes</h2>
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites Internet. L'éditeur ne peut
                  être tenu responsable directement ou indirectement du contenu des sites vers lesquels
                  renvoient ces liens.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">5. Données personnelles</h2>
                <p>
                  Conformément à la loi « Informatique et Libertés » n° 78-17 du 6 janvier 1978 et au RGPD,
                  vous disposez d'un droit d'accès, de modification, de rectification et de suppression des
                  données vous concernant. Pour plus de détails, consultez notre{" "}
                  <a href="/rgpd" className="text-amber-hover hover:underline">
                    politique de confidentialité
                  </a>
                  . Pour exercer ce droit, vous pouvez écrire à contact@studiovega.dev.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">6. Limitation de responsabilité</h2>
                <p className="mb-2">
                  L'éditeur s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations
                  diffusées sur son site, dont il se réserve le droit de corriger le contenu à tout moment et
                  sans préavis.
                </p>
                <p>
                  L'éditeur ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                  mises à disposition sur ce site et décline toute responsabilité pour les éventuelles
                  imprécisions, inexactitudes ou omissions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">
                  7. Droit applicable et juridiction compétente
                </h2>
                <p>
                  Les présentes mentions légales sont régies par la loi française. En cas de litige, les
                  tribunaux français seront compétents.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
