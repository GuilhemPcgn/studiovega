import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "RGPD",
  description: "Politique de confidentialité et RGPD du site Studio Vega",
};

function ToFill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-destructive/10 px-1.5 py-0.5 font-medium text-destructive">
      {children}
    </span>
  );
}

export default function RGPDPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Politique de Confidentialité (RGPD)</h1>

          <Card>
            <CardContent className="p-8 space-y-8 text-foreground/80">
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">1. Introduction</h2>
                <p className="mb-2">
                  Cette politique de confidentialité s'applique au site studiovega.dev et a pour but de vous
                  informer sur la façon dont vos données personnelles sont traitées, conformément au Règlement
                  Général sur la Protection des Données (RGPD).
                </p>
                <p>
                  L'éditeur du site accorde une grande importance à la protection de vos données personnelles
                  et s'engage à les traiter avec le plus grand soin, en toute transparence.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">2. Responsable du traitement</h2>
                <p>
                  Le responsable du traitement des données personnelles collectées sur ce site est :
                  <br />
                  <ToFill>[Nom / raison sociale]</ToFill>
                  <br />
                  Adresse : <ToFill>[Adresse]</ToFill>
                  <br />
                  Email : contact@studiovega.dev
                  <br />
                  Téléphone : +33 7 86 44 40 61
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">3. Données collectées</h2>
                <p className="mb-2">Les données suivantes peuvent être collectées lorsque vous utilisez ce site :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Données de contact (nom, adresse email, numéro de téléphone) lorsque vous prenez contact</li>
                  <li>Données techniques (adresse IP, type de navigateur, appareil utilisé) pour assurer le bon fonctionnement du site</li>
                  <li>Statistiques de visite anonymisées via Google Analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">4. Finalités du traitement</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous fournir les informations ou services demandés</li>
                  <li>Améliorer l'expérience utilisateur du site</li>
                  <li>Établir des statistiques de visite anonymisées</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">5. Base légale du traitement</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Votre consentement explicite lorsque vous prenez contact</li>
                  <li>L'intérêt légitime à améliorer le site et ses services</li>
                  <li>Les obligations légales le cas échéant</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">6. Destinataires des données</h2>
                <p className="mb-2">
                  Vos données personnelles ne sont accessibles qu'aux personnes autorisées, dans le strict
                  cadre de leurs fonctions. Elles ne sont pas partagées avec des tiers, sauf :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Avec votre consentement explicite</li>
                  <li>Si la loi l'exige</li>
                  <li>
                    Avec les sous-traitants techniques du site (hébergeur Vercel, service d'envoi d'email
                    Resend) qui agissent selon les instructions de l'éditeur et dans le respect du RGPD
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">7. Durée de conservation</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Les données de contact : 3 ans à compter du dernier contact</li>
                  <li>Les données techniques : 13 mois maximum</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">8. Vos droits</h2>
                <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Droit d'accès et de rectification</li>
                  <li>Droit à l'effacement (« droit à l'oubli »)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit d'opposition</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit de retirer votre consentement à tout moment</li>
                </ul>
                <p className="mt-2">
                  Pour exercer ces droits, vous pouvez écrire à l'adresse email suivante : contact@studiovega.dev.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">9. Sécurité des données</h2>
                <p>
                  Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger
                  vos données personnelles contre toute perte, accès non autorisé, divulgation ou altération.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">
                  10. Modification de la politique de confidentialité
                </h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment. Toute modification sera
                  publiée sur cette page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">11. Contact</h2>
                <p>
                  Pour toute question relative à cette politique de confidentialité ou à l'exercice de vos
                  droits, vous pouvez écrire à contact@studiovega.dev.
                </p>
              </section>

              <p className="text-sm pt-4 border-t border-border">
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
