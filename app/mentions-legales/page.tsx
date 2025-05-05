import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Développeur Web Fullstack",
  description: "Mentions légales du site web",
};

export default function LegalPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Mentions Légales</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2>1. Éditeur du site</h2>
            <p>
              Le présent site est édité par [Nom], développeur web fullstack indépendant.
            </p>
            <p>
              Adresse : [Adresse]<br />
              Téléphone : +33 6 12 34 56 78<br />
              Email : contact@example.com<br />
            </p>
            <p>
              SIRET : [Numéro SIRET]<br />
              TVA intracommunautaire : [Numéro TVA]
            </p>
            
            <h2>2. Hébergement</h2>
            <p>
              Ce site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur], [Téléphone de l'hébergeur].
            </p>
            
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit d'auteur et la propriété intellectuelle.
            </p>
            <p>
              Ces éléments sont la propriété exclusive de [Nom]. Toute reproduction ou représentation, en tout ou partie, sur un quelconque support est interdite sans l'autorisation préalable et écrite de [Nom].
            </p>
            
            <h2>4. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites Internet. [Nom] ne peut être tenu responsable directement ou indirectement du contenu des sites vers lesquels renvoient ces liens.
            </p>
            
            <h2>5. Données personnelles</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" n° 78-17 du 6 janvier 1978, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant.
            </p>
            <p>
              Pour exercer ce droit, vous pouvez contacter [Nom] à l'adresse email suivante : contact@example.com.
            </p>
            
            <h2>6. Limitation de responsabilité</h2>
            <p>
              [Nom] s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur son site, dont il se réserve le droit de corriger le contenu à tout moment et sans préavis. [Nom] ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              En conséquence, [Nom] décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site.
            </p>
            
            <h2>7. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes conditions d'utilisation du site sont régies par la loi française. En cas de litige, les tribunaux français seront compétents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}