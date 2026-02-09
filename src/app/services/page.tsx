import { faChalkboardTeacher, faMoneyCheckDollar, faPeopleArrows, faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";
import Button from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "Services - Sacercode",
  description: "Découvrez les services de Sacercode, société de conseil et formation en informatique.",
};

export default function Services() {
  return (
    <div className="max-w-4xl">
      <h1>Services informatique</h1>

      <section>
        <FontAwesomeIcon icon={faCode} className="service-icon"/>
        <h2 id="developpement">Développement</h2>
        <article>
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

      <section className="mt-32">
        <FontAwesomeIcon icon={faChalkboardTeacher} className="service-icon"/>
        <h2 id="formation">Formation</h2>
        <article>
          <p>La formation permet d&apos;aider les entreprises et les particuliers à améliorer leurs compétences en informatique afin de rester à jour et compétitifs.</p>
          <br/>
          <p>Nos formations couvrent une variété de sujets, allant de la simple bureautique au développement web et aux bases de données, tout en passant par la cybersécurité et l&apos;intelligence artificielle.</p>
          <br/>
          <p>Les sessions de formation sont adaptées au niveau de compétence des participants, qu&apos;ils soient débutants ou avancés.</p>
          <br/>
          <p>En plus des formations en présentiel, des cours en ligne sont également proposés pour une flexibilité maximale.</p>
        </article>
      </section>

      <section className="mt-32">
        <FontAwesomeIcon icon={faPeopleArrows} className="service-icon"/>
        <h2 id="conseil">Conseil</h2>
        <article>
          <p>Nous accompagnons les entreprises dans la structuration de leurs projets informatique et dans l&apos;optimisation de leurs processus en tirant le meilleur parti de la technologie et de l&apos;IA.</p>
          <br/>
          <p>Sacercode travaille en étroite collaboration avec les clients pour comprendre leurs défis, analyser leurs besoins, définir leurs stratégies technologiques et enfin mettre en œuvre de solutions adaptées.</p>
          <br/>
          <p>Les services de conseil couvrent également l&apos;infrastructure informatique et la gestion des données.</p>
          <br/>
          <p>En tant que professionnels de l&apos;informatique, nous effectuons une veille technologique et nous engageons à fournir des recommandations basées sur les meilleures pratiques et les dernières tendances technologiques.</p>
        </article>
      </section>

      <section className="mt-32">
        <FontAwesomeIcon
          icon={faSkullCrossbones}
          // preserveAspectRatio="xMidYMid meet"
          width={448}
          height={584}
          className="service-icon"
        />
        <h2 id="cybersecurite">Cybersecurité</h2>
        <article>
          <p>La cybersécurité nous concerne tous.</p>
          <br/>
          <p>Nos développement sont réalisés en gardant en tête que tout utilisateur est potentiellement malveillant.</p>
          <br/>
          <p>En cas de faille de sécurité constatée, nous contactons immédiatement nos clients.</p>
          <br/>
          <p>Nous n&apos;offrons pas encore de services de cybersécurité à proprement parler tels que des audits ou tests d'intrusion.</p>
          <br/>
          <p>Néanmoins vous pouvez retrouver les ressources utiles sur cette page annexe.</p>
          <br/>
          <Link href="/cybersecurity">
            <Button>Conseils cybersécurité</Button>
          </Link>
        </article>
      </section>
      
      <section className="mt-32">
        <FontAwesomeIcon icon={faMoneyCheckDollar} className="service-icon"/>
        <h3 id="tarifs">Tarifs</h3>
        <article>
          <p>Le tarif journalier moyen est actuellement de 400€, soit environ <b>50€ de l&apos;heure.</b></p>
          <br/>
          <p>Ce tarif peut varier en fonction de la complexité du projet, de la durée de l&apos;engagement et des compétences spécifiques requises.</p>
          <br/>
          <p>Pour toute demande de devis ou d&apos;information complémentaire, n&apos;hésitez pas à nous contacter.</p>
          <br/>
          <p>Nous sommes là pour vous aider à atteindre vos objectifs informatiques.</p>
          <small>Nos tarifs sont soumis à une TVA de 20%. (article 278 du code général des impôts)</small>
        </article>
      </section>
      <section className="flex flex-col items-center my-32">
        <h3>Besoin de nos services ?</h3>
        <article>
          <Link href="/contact">
            <Button>Contactez nous !</Button>
          </Link>
        </article>
      </section>
    </div>
  )
}