import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
    title: "Contact - Sacercode",
    description: "Contactez l'équipe de Sacercode, société de conseil et formation en informatique.",
};

export default function Contact() {
    return (
        <div className="max-w-4xl w-full">
            <article className="flex flex-col gap-4 mb-8">
                <h1>Contact</h1>
                <p>N&apos;hésitez pas à directement nous contacter pour toute information.<br/>Nous vous répondrons avec plaisir et bonne humeur ! 😊</p>
                <section className="mb-4 flex flex-wrap gap-6 md:gap-10">
                    <p className="icon-text">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <a href="mailto:contact@sacercode.com">contact@sacercode.com</a>
                    </p>
                    <p className="icon-text">
                        <FontAwesomeIcon icon={faPhone}/>
                        <a href="tel:+33745269103">07 45 26 91 03</a>
                    </p>
                </section>
                <h2>Réseaux sociaux</h2>
                <p>Suivez-nous sur nos réseaux sociaux pour rester au courant de nos dernières réalisations et mises à jours de logiciels !</p>
                <section className="mb-4 flex flex-wrap gap-6 md:gap-10">
                    <p className="icon-text">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <a href="https://www.linkedin.com/company/sacercode" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                    <p className="icon-text">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <a href="https://www.instagram.com/sacercode" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </p>
                    <p className="icon-text">
                        <FontAwesomeIcon icon={faFacebook}/>
                        <a href="https://www.facebook.com/sacercode" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </p>
                    <p className="icon-text">
                        <FontAwesomeIcon icon={faYoutube}/>
                        <a href="https://www.youtube.com/c/sacercode" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </p>
                </section>
            </article>
        </div>
    )
}