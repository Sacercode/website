import { faChalkboardTeacher, faMoneyCheckDollar, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

export const metadata: Metadata = {
  title: "Services - Sacercode",
  description: "Découvrez les services de Sacercode, société de conseil et formation en informatique.",
};

export default function Services() {
  return (
    <div className="max-w-4xl">
      <h1>Services informatique</h1>
      <section>
        <h2 id="developpement">Développement</h2>
        <article>
          <FontAwesomeIcon icon={faCode} className="service-icon"/>
          <p>Sacercode propose des services de développement informatique sur mesure pour répondre aux besoins spécifiques de chaque client.</p>
          <br/>
          <p>Que ce soit pour la création de sites web, d&apos;applications mobiles ou de logiciels, nous nous engageons à fournir des solutions de qualité.</p>
          <br/>
          <p>Nos développeurs couvrent une large gamme de technologies et de langages de programmation, ce qui permet de s&apos;adapter à différents projets et environnements.</p>
          <br/>
          <p>Notre grande flexibilité et réactivité permettent de s&apos;adapter rapidement aux besoins changeants de nos clients.</p>
          <br/>
          <p>Collaborer avec nous, c&apos;est avoir un suivi personnalisé et une communication directe, facilitant ainsi la compréhension des attentes et ainsi d&apos;atteindre les objectifs du projet.</p>
        </article>
      </section>
      <section className="mt-8">
        <h2 id="formation">Formation</h2>
        <article>
          <FontAwesomeIcon icon={faChalkboardTeacher} className="service-icon"/>
          <p>La formation permet d&apos;aider les entreprises et les particuliers à améliorer leurs compétences en informatique afin de rester à jour et compétitifs.</p>
          <p>Nos formations couvrent une variété de sujets, allant de la simple bureautique au développement web et aux bases de données, tout en passant par la cybersécurité et l&apos;intelligence artificielle.</p>
          <p>Les sessions de formation sont adaptées au niveau de compétence des participants, qu&apos;ils soient débutants ou avancés.</p>
          <p>En plus des formations en présentiel, des cours en ligne sont également proposés pour une flexibilité maximale.</p>
        </article>
      </section>
      <section className="mt-8">
        <h2 id="conseil">Conseil</h2>
        <article>
          <FontAwesomeIcon icon={faPeopleArrows} className="service-icon"/>
          <p>Nous accompagnons les entreprises dans la structuration de leurs projets informatique et dans l&apos;optimisation de leurs processus en tirant le meilleur parti de la technologie et de l&apos;IA.</p>
          <p>Sacercode travaille en étroite collaboration avec les clients pour comprendre leurs défis, analyser leurs besoins, définir leurs stratégies technologiques et enfin mettre en œuvre de solutions adaptées.</p>
          <p>Les services de conseil couvrent également l&apos;infrastructure informatique et la gestion des données.</p>
          <p>En tant que professionnels de l&apos;informatique, nous effectuons une veille technologique et nous engageons à fournir des recommandations basées sur les meilleures pratiques et les dernières tendances technologiques.</p>
        </article>
      </section>
      <section className="mt-8">
        <h2 id="cybersecurite">Cybersecurité</h2>
        <article className="flex flex-wrap justify-between gap-4">
          <p>Nous n&apos;offrons pas encore de services de cybersécurité. <br/>Néanmoins vous pouvez retrouver les ressources utiles sur cette page annexe.</p>
          <Link href="/cybersecurity">
            <button className="w-full md:w-auto float-right bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Conseils cybersécurité
            </button>
          </Link>
        </article>
      </section>
      <section className="mt-8">
        <h3 id="tarifs">Tarifs</h3>
        <article>
          <FontAwesomeIcon icon={faMoneyCheckDollar} className="service-icon"/>
          <p>Le tarif journalier moyen est actuellement de 400€, soit environ <b>50€ de l&apos;heure.</b></p>
          <p>Ce tarif peut varier en fonction de la complexité du projet, de la durée de l&apos;engagement et des compétences spécifiques requises.</p>
          <p>Pour toute demande de devis ou d&apos;information complémentaire, n&apos;hésitez pas à nous contacter.</p>
          <p>Nous sommes là pour vous aider à atteindre vos objectifs informatiques.</p>
          <small>Nos tarifs sont soumis à une TVA de 20%. (article 278 du code général des impôts)</small>
        </article>
      </section>
    </div>
  )
}