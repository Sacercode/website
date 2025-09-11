import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
    title: "Cybersécurité - Sacercode",
    description: "Consultez les conseils cybersécurité gratuits de Sacercode, société de conseil et formation en informatique.",
};

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-4">
                <section className="mb-8">
                    <h1>Cybersécurité</h1>
                    Voici une liste de ressources pour vous aider à réagir face aux problèmes de cybersécurité que vous pourriez rencontrer.
                    <br/>
                    <br/>
                    <article className="pb-12">
                        <h2>Réagir face à un incident</h2>
                        Que ce soit par internet, téléphone ou SMS, il est important de savoir comment réagir face à une menace.

                        <article>
                            <h3>Témoin ou victime d&apos;un contenu illicite en ligne ?</h3>
                            Violence, mise en danger des personnes, menace ou apologie du terrorisme, injure ou diffamation, incitation à la haine raciale ou discrimination, atteintes aux mineurs : je ne partage pas, <a
                                href="https://www.internet-signalement.gouv.fr/PharosS1/"
                                target="_blank" rel="noopener noreferrer"
                                >
                                je signale à Pharos.
                            </a>
                        </article>

                        <article>
                            <h3>Victime d&apos;escroqueries sur internet ?</h3>
                            Faux sites de vente, piratage de comptes de messagerie,
                            extorsion d&apos;argent pour débloquer un ordinateur...
                            <br/>
                            <a
                                href="https://demarches.service-public.fr/mademarche/arnaqueInternet/demarche?action=PLAINTE&type=FSV"
                            >
                                Déposez une plainte en ligne grâce au dispositif Thésée.
                            </a>
                        </article>

                        <article>
                            <h3>Vous avez encore votre carte bancaire mais elle a été utilisée sans votre accord ?</h3>
                            Avant toute chose, commencez par signaler l&apos;incident à votre banque, faites opposition sur votre carte bancaire et demandez le remboursement des sommes prélevées.
                            <br/>
                            Ensuite, <a
                                href="https://www.service-public.fr/particuliers/vosdroits/R46526"
                                target="_blank" rel="noopener noreferrer"
                            >
                                signalez-le sur la plateforme Perceval
                            </a>
                            <br/>
                            <small>(Cela ne substitue pas à une plainte !)</small>
                        </article>

                        <article>
                            <h3>Vous n&apos;êtes pas sûr de la démarche à suivre dans votre situation ?</h3>
                            Faites votre diagnostique <a
                                href="https://www.cybermalveillance.gouv.fr/diagnostic"
                                target="_blank" rel="noopener noreferrer"
                            >
                                17Cyber
                            </a> ou <a
                                href="https://www.service-public.fr/particuliers/vosdroits/N31138"
                                target="_blank" rel="noopener noreferrer"
                            >
                                Service-Public.fr
                            </a>
                        </article>

                        <article>
                            <h3>Votre facture téléphonique contient des frais suspects ?</h3>
                            Contactez le service client de votre opérateur (le numéro est souvent indiqué sur la facture), contestez les prélévements anormaux et demandez à désactiver les achats via mobile pour éviter que cela ne se reproduise.
                            <br/>
                            Enfin : <a href="https://surmafacture.fr/" target="_blank" rel="noopener noreferrer">
                                Signalez le sur Surmafacture.fr
                            </a>
                        </article>
                    </article>
                    
                    <article className="pb-12">
                        <h2>Aidez les autres en signalant des contenus problématiques</h2>
                        <ul>
                            <li>
                                Vous avez remarqué un site suspect dont l&apos;URL diffère du vrai mais qui y ressemble fortement ?
                                <br/>
                                <a href="https://phishing-initiative.eu" target="_blank" rel="noopener noreferrer">
                                    Signalez cette tentative de phishing sur phishing-initiative.eu
                                </a>
                            </li>
                            <br/>
                            <li>
                                Vous avez reçu un appel ou un SMS suspect ?
                                <br/>
                                <a href="https://www.33700.fr/" target="_blank" rel="noopener noreferrer">
                                    Signalez le sur 33700.fr
                                </a>
                            </li>
                            <br/>
                            <li>
                                Vous avez reçu un e-mail suspect ?
                                <br/>
                                <a href="https://www.signal-spam.fr/" target="_blank" rel="noopener noreferrer">
                                    Signalez le sur signal-spam.fr
                                </a>
                            </li>
                        </ul>
                    </article>

                    <article className="pb-12">
                        <h2>Fuites de données</h2>
                        <p>
                            Vérifiez si vos adresses e-mail ont étés sujettes à des fuites de données à l&apos;aide du site :&ensp;
                            <a href="https://haveibeenpwned.com/" target="_blank" rel="noopener noreferrer">
                                haveibeenpwned.com
                            </a>
                            <br/><br/>
                            Si c&apos;est le cas, vous verrez la liste des données qui ont fuités et qui sont rendues accessible à tous sur internet. Les deux principaux risques sont le phishing et l&apos;usurpation d&apos;identité.
                            <br/>
                            Nous vous conseillons de ne plus utiliser l&apos;adresse e-mail compromise. Dès que vous voyez un service l&apos;utilisant, changez pour une adresse mail qui ne l&apos;est pas, idéalement, créez-en une nouvelle.
                            <br/><br/>
                            Si votre numéro de téléphone a été compromis, il est recommandé de les changer pour éviter les risques de phishing par SMS ou appel téléphonique.
                            <br/><br/>
                            Si votre RIB a été compromis, il y a des chances que vous soyez appellé par des personnes malveillantes qui essaieront de vous soutirer de l&apos;argent en se faisant passer pour votre banque.
                        </p>
                    </article>
                    
                    <article>
                        <h2>Bonnes pratiques</h2>

                        <article>
                            <h3>Envoi de documents sensibles</h3>
                            <p>
                                Si vous devez transmettre un document tel qu&apos;une carte d&apos;identitée ou un justificatif de domicile,
                                nous vous recommandons de systématiquement utiliser le service gouvernemental FiligraneFacile afin que le document ne puisse être utilisé à d&apos;autres fins que celle indiquée dans ce dit filigrane.
                                <br/>
                                <a href="https://filigrane.beta.gouv.fr/" target="_blank" rel="noopener noreferrer">
                                    Filigraner un document avec filigrane.beta.gouv.fr
                                </a>
                            </p>
                        </article>

                        <article>
                            <h3>Mots de passes</h3>
                            <p>
                                Utilisez un gestionnaire de mots de passe, il vous permettra de gérer des bases de données chiffrées, puis d&apos;y générer et stocker des mots de passe forts et uniques pour chaque service.
                                <br/>
                                Nous vous recommandons d&apos;utiliser le logiciel gratuit <a
                                    href="https://keepassxc.org/" target="_blank" rel="noopener noreferrer"
                                >
                                    KeepassXC
                                </a>
                                <br/><br/>
                                Vous pourrez ensuite synchroniser vos bases de données chiffrées entre vos appareils en utilisant par exemple Google Drive ou tout autre service de stockage en ligne.
                                Le seul mot de passe que vous aurez à retenir sera ainsi celui pour déchiffrer votre base de données (ou de manière générale, accéder à votre gestionnaire si vous utiliser un service externe).
                                <br/><br/>
                                Un mot de passe fort doit contenir au moins 12 caractères, avec des majuscules, minuscules, chiffres et caractères spéciaux. Il ne doit pas contenir de mots du dictionnaire, de noms propres de dates ou autres motifs prévisibles.
                                Idéalement, vous ne devriez pas être capable de le retenir. Le gestionnaire de mots de passe fait que vous pouvez copier et coller le mot de passe sans même le voir.
                                <br/><br/>
                                Vous pouvez éventuellement utiliser une phrase de passe, c&apos;est-à-dire une suite de mots aléatoires qui n&apos;a pas de sens mais qui est facile à retenir.
                                Notez cependant que les mots de passe uniquement composés de lettres sont plus faciles à mémoriser par quelqu&apos;un qui le verrait par inadvertance ou curiosité mal placée, ou pire, ils peuvent être devinés avec des attaques par dictionnaire.
                                Il est donc préférable d&apos;y ajouter chiffres et caractères spéciaux voire d&apos;ajouter des majuscules en plein millieu de mot, de retirer des lettres muettes ou écrire en argot.
                                <br/><br/>

                                Exemples de mot de passe faible :
                                <ul>
                                    <li>NomPrénom63*</li>
                                    <li>LesCarottesSontCuittes</li>
                                    <li>Mon chat s&apos;appelle Tommy</li>
                                </ul>
                                <br/>
                                    
                                Exemples de mot de passe fort :
                                <ul>
                                    <li>L&-Kr0t.$oN_Kùït</li>
                                    <li>fyP|lu&quot;&gt;STKJ~^NJhwm;</li>
                                    <li>voitUr$23&gâtEau.à_1K-i/mètR</li>
                                </ul>
                            </p>
                        </article>
                    </article>
                </section>
            </div>
        </section>
    )
}