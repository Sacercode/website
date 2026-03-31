
import Button from "@/components/Button/Button";
import Hero from "@/components/PageSpecific/Home/Sections/Hero";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Hero/>
            <section className="flex flex-col items-center justify-center min-h-screen w-full px-4 border-t-2 border-gray-300 dark:border-gray-600">
                <div className="flex flex-col items-center w-full mx-auto text-center space-y-10 max-w-2xl">
                    <h2>Pourquoi "Sacercode" ?</h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                        Parce que coder est un sacerdoce.
                    </p>
                    <small className="text-sm md:text-md text-gray-600 dark:text-gray-400 font-medium max-w-lg">
                        Sacerdoce (nom masculin), sens figuré : Activité qui présente un caractère quasi religieux en raison du dévouement qu&apos;elle exige.
                    </small>
                </div>
                <div className="flex flex-col w-full mx-auto text-center space-y-10 max-w-2xl mt-12">
                    <h2 className="text-left">
                        Notre raison d'être
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-left">
                        Cette entreprise est née d'un constat : l'informatique est un domaine complexe et souvent intimidant pour les non-initiés, mais il est aussi incroyablement puissant et créatif.
                        <br/>
                        <br/>
                        En choisissant le nom "Sacercode", nous voulions refléter à la fois la passion, le dévouement et l'engagement que nous avons envers notre métier, tout en soulignant l'idée que coder peut être une expérience enrichissante et presque spirituelle pour ceux qui s'y consacrent pleinement.
                        <br/>
                        <br/>
                        Nous croyons que l'informatique peut être un moyen de résoudre des problèmes, d'innover et de créer des expériences uniques, et nous sommes déterminés à partager cette passion avec nos clients et notre communauté.
                    </p>
                </div>
            </section>

            <section className="flex items-center justify-center min-h-screen w-full px-4 border-t-2 border-gray-300 dark:border-gray-600">
                <div className="flex flex-col w-full mx-auto space-y-10 max-w-2xl">
                    <h2>Notre vision</h2>

                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                        L'interface graphique est l'avenir de la programmation.
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                        Les interfaces graphiques de programmation permettent de rendre le développement plus accessible, plus rapide et plus intuitif. Les terminaux et les lignes de code ne sont pas adaptés à tout le monde, et peuvent être intimidants pour les débutants. En démocratisant l'informatique grâce à des outils visuels, nous voulons permettre à un plus grand nombre de personnes de créer, d'innover et de résoudre des problèmes grâce à la technologie.
                    </p>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                        Démocratiser l'informatique par le jeu.
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                        Le web devrait être un bac à sable pour l&apos;innovation, un espace de créativité et d&apos;opportunités pour tous. En rendant l&apos;informatique plus ludique et accessible, nous pouvons encourager davantage de personnes à s&apos;impliquer dans la création de contenu numérique, à apprendre de nouvelles compétences et à contribuer à l&apos;évolution du web de manière positive et inclusive.
                    </p>

                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                        Transparence
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                        Les utilisateurs devraient pouvoir comprendre comment les technologies fonctionnent, et que font concrètement les algorithmes derrière les outils numériques qu'ils utilisent. En rendant les processus informatiques plus transparents, nous pouvons aider les utilisateurs à prendre des décisions éclairées, à mieux comprendre les implications de leurs actions en ligne et à promouvoir une utilisation plus responsable et éthique de la technologie.
                    </p>

                    {/* <Link className="self-center mt-6" href="/logiciels">
                        <Button>
                            Découvrez nos logiciels
                        </Button>
                    </Link> */}
                </div>
            </section>

            <section className="flex items-center justify-center min-h-screen w-full px-4 border-t-2 border-gray-300 dark:border-gray-600">
                <div className="flex flex-col w-full mx-auto space-y-10 max-w-2xl">
                    <h2>Notre mission</h2>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                        Notre mission est de rendre l'informatique plus accessible, plus ludique et plus transparente pour tous. Nous croyons que la technologie devrait être un outil d'émancipation et de créativité, et nous sommes déterminés à créer des solutions qui permettent à chacun de s'exprimer, d'apprendre et de contribuer à l'évolution du web de manière positive et inclusive.
                    </p>
                </div>
            </section>

            <section className="flex items-center justify-center min-h-screen w-full px-4 border-t-2 border-gray-300 dark:border-gray-600">
                <div className="flex flex-col w-full mx-auto space-y-10 max-w-2xl">
                    <h2>Nos inspirations</h2>
                    <article className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                        <h3>Visualisation de couleurs</h3>
                        <p className="flex flex-wrap gap-4 mt-4">
                            <Link className="self-center" href="https://color.review/">
                                <Button>
                                    Contrast tester
                                </Button>
                            </Link>
                            <Link className="self-center" href="https://codepen.io/editor/meodai/pen/019d260d-fa9c-7764-9735-4567aac4123c">
                                <Button>
                                    Cube
                                </Button>
                            </Link>
                            <Link className="self-center" href="https://meodai.github.io/poline/">
                                <Button>
                                    Poline
                                </Button>
                            </Link>
                        </p>
                    </article>

                    <article className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                        <h3>Editeurs de code visuels</h3>

                        <p className="flex flex-wrap gap-4 mt-4">
                            <Link className="self-center" href="https://www.scratch.fr/">
                                <Button>
                                    Scratch
                                </Button>
                            </Link>
                            <Link className="self-center" href="https://nodered.org/">
                                <Button>
                                    Node red
                                </Button>
                            </Link>
                            
                            <Link className="self-center" href="https://n8n.io/">
                                <Button>
                                    n8n
                                </Button>
                            </Link>

                            <Link className="self-center" href="https://luna-park.app/">
                                <Button>
                                    Luna Park
                                </Button>
                            </Link>
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
}
