import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RGPD | Développeur Web Fullstack",
  description: "Politique de confidentialité et RGPD",
};

export default function RGPDPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Politique de Confidentialité (RGPD)</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Cette politique de confidentialité s'applique au site [Nom du site] et a pour but de vous informer sur la façon dont nous traitons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p>
              [Nom] accorde une grande importance à la protection de vos données personnelles et s'engage à les traiter avec le plus grand soin, en toute transparence.
            </p>
            
            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est :
            </p>
            <p>
              [Nom]<br />
              Adresse : [Adresse]<br />
              Email : contact@example.com<br />
              Téléphone : +33 6 12 34 56 78
            </p>
            
            <h2>3. Données collectées</h2>
            <p>
              Nous collectons les données suivantes lorsque vous utilisez notre site :
            </p>
            <ul>
              <li>Données de contact (nom, prénom, adresse email, numéro de téléphone) lorsque vous remplissez notre formulaire de contact</li>
              <li>Données techniques (adresse IP, type de navigateur, appareil utilisé) pour assurer le bon fonctionnement du site</li>
              <li>Cookies nécessaires au fonctionnement du site</li>
            </ul>
            
            <h2>4. Finalités du traitement</h2>
            <p>
              Les données personnelles que nous collectons sont utilisées pour :
            </p>
            <ul>
              <li>Répondre à vos demandes de contact</li>
              <li>Vous fournir les informations ou services demandés</li>
              <li>Améliorer l'expérience utilisateur de notre site</li>
              <li>Établir des statistiques de visite anonymisées</li>
            </ul>
            
            <h2>5. Base légale du traitement</h2>
            <p>
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul>
              <li>Votre consentement explicite lorsque vous remplissez notre formulaire de contact</li>
              <li>Notre intérêt légitime à améliorer notre site et nos services</li>
              <li>Nos obligations légales le cas échéant</li>
            </ul>
            
            <h2>6. Destinataires des données</h2>
            <p>
              Vos données personnelles ne sont accessibles qu'aux personnes autorisées au sein de notre organisation, dans le strict cadre de leurs fonctions.
            </p>
            <p>
              Nous ne partageons pas vos données avec des tiers, sauf :
            </p>
            <ul>
              <li>Avec votre consentement explicite</li>
              <li>Si la loi nous y oblige</li>
              <li>Avec nos sous-traitants techniques (hébergeur du site) qui agissent selon nos instructions et dans le respect du RGPD</li>
            </ul>
            
            <h2>7. Durée de conservation</h2>
            <p>
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et conformément aux exigences légales.
            </p>
            <ul>
              <li>Les données de contact : 3 ans à compter du dernier contact</li>
              <li>Les données techniques : 13 mois maximum</li>
            </ul>
            
            <h2>8. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul>
              <li>Droit d'accès et de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
              <li>Droit à la portabilité</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : contact@example.com.
            </p>
            
            <h2>9. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, accès non autorisé, divulgation ou altération.
            </p>
            
            <h2>10. Modification de la politique de confidentialité</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page. Nous vous encourageons à consulter régulièrement cette politique pour rester informé de nos pratiques en matière de protection des données.
            </p>
            
            <h2>11. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité ou à l'exercice de vos droits, vous pouvez nous contacter à l'adresse email suivante : contact@example.com.
            </p>
            
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}