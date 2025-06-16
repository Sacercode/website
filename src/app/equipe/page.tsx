import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "L'équipe - Sacercode",
    description: "Découvrez l'équipe de Sacercode, société de conseil et formation en informatique.",
};

export default function Equipe() {
    return (
        <section className="flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white p-6">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-4">
                <article className="mb-8">
                    <h1>L&apos;équipe</h1>
                    <p>
                        D&apos;après l&apos;expression anglaise &quot;one man army&quot;,
                        <br/>
                        Sacercode est actuellement une armée faite d&apos;un seul homme.
                        <br />
                        <br />
                        Je m&apos;appelle Dorian Blanchard et je suis un ingénieur informatique spécialisé dans le développement web, avec une expertise dans la création de sites web adaptés à toutes tailles d&apos;écrans.
                        <br />
                        <br />
                        En tant que client, l&apos;avantage est que vous n&apos;aurez pas à vous soucier de la communication entre les membres de l&apos;équipe, car il n&apos;y en a qu&apos;un seul !
                        <br />
                        <br />
                        Vous aurez donc un interlocuteur unique pour tous vos projets, ce qui simplifie grandement les échanges et la gestion de vos demandes.
                        <br />
                        <br />
                        Pour en savoir plus sur moi, vous pouvez&nbsp;
                        <a href="https://blanchardorian.fr" target="_blank" rel="noopener noreferrer">
                            consulter mon portfolio personnel
                        </a>.
                    </p>
                </article>
                <Image
                    src="./images/dorian-blanchard.png"
                    alt="Dorian Blanchard, fondateur de Sacercode"
                    width={300}
                    height={300}
                    className="h-auto rounded-full mx-auto mb-4 border-2 border-gray-600 dark:border-gray-300 shadow-lg"
                />
            </div>
        </section>
    )
}