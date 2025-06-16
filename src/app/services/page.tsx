import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Sacercode",
  description: "Découvrez les services de Sacercode, société de conseil et formation en informatique.",
};

export default function Services() {
  return (
    <div>
      <h1>Services informatique</h1>
      <section>
        <h2 className="text-2xl font-bold mb-4">Développement</h2>
        <p>Sacercode propose des services de développement informatique sur mesure pour répondre aux besoins spécifiques de chaque client.</p>
        <p>Que ce soit pour la création de sites web, d&apos;applications mobiles ou de logiciels, nous nous engageons à fournir des solutions de qualité.</p>
        <p>Nos développeurs couvrent une large gamme de technologies et de langages de programmation, ce qui permet de s&apos;adapter à différents projets et environnements.</p>
        <p>Nous offrons une flexibilité et une réactivité accrues, permettant de s&apos;adapter rapidement aux besoins changeants de nos clients.</p>
        <p>Collaborer avec nous, c&apos;est avoir un suivi personnalisé et une communication directe, facilitant ainsi la compréhension des attentes et ainsi d&apos;atteindre les objectifs du projet.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Formation</h2>
        <p>La formation permet d&apos;aider les entreprises et les particuliers à améliorer leurs compétences en informatique afin de rester à jour et compétitifs.</p>
        <p>Nos formations couvrent une variété de sujets, allant de la simple bureautique au développement web et aux bases de données, tout en passant par la cybersécurité et l&apos;intelligence artificielle.</p>
        <p>Les sessions de formation sont adaptées au niveau de compétence des participants, qu&apos;ils soient débutants ou avancés.</p>
        <p>En plus des formations en présentiel, des cours en ligne sont également proposés pour une flexibilité maximale.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Conseil</h2>
        <p>Nous accompagnons les entreprises dans la structuration de leurs projets informatique et dans l&apos;optimisation de leurs processus en tirant le meilleur parti de la technologie et de l&apos;IA.</p>
        <p>Sacercode travaille en étroite collaboration avec les clients pour comprendre leurs défis, analyser leurs besoins, définir leurs stratégies technologiques et enfin mettre en œuvre de solutions adaptées.</p>
        <p>Les services de conseil couvrent également l&apos;infrastructure informatique et la gestion des données.</p>
        <p>En tant que professionnels de l&apos;informatique, nous effectuons une veille technologique et nous engageons à fournir des recommandations basées sur les meilleures pratiques et les dernières tendances technologiques.</p>
      </section>
      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Tarifs</h3>
        <p>Le tarif journalier moyen est actuellement de 400€, soit environ <b>50€ de l&apos;heure.</b></p>
        <p>Ce tarif peut varier en fonction de la complexité du projet, de la durée de l&apos;engagement et des compétences spécifiques requises.</p>
        <p>Pour toute demande de devis ou d&apos;information complémentaire, n&apos;hésitez pas à nous contacter.</p>
        <p>Nous sommes là pour vous aider à atteindre vos objectifs informatiques.</p>
        <small>Nos tarifs sont soumis à une TVA de 20%. (article 278 du code général des impôts)</small>
      </section>
    </div>
  )
}