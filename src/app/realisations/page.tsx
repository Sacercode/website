import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Realisations() {
    return (
        <section className="flex flex-col items-center">
            <div className="max-w-6xl w-full flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Nos réalisations</h1>
                <p className="text-lg max-w-xl text-center mb-16 mx-auto leading-relaxed">
                    Découvrez nos projets récents et comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des solutions informatiques sur mesure.
                </p>
                
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                            Client confidentiel
                        </h2>
                        <p className="text-lg max-w-md mx-auto mb-6 text-gray-700 dark:text-gray-300">
                            Après avoir passé un accord de confidentialité, nous avons réalisé un cadrage de projet composé de schémas UML et d&apos;un cahier des charges techniques.
                        </p>
                    </div>
                </div>

                {/* Disco Star Project */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Disco Star</h2>
                        <p className="text-lg max-w-md mx-auto mb-6 text-gray-700 dark:text-gray-300">
                            Nous avons réalisé le site internet de ce tout premier jeu mobile inspiré par l&apos;iconique groupe Village People !
                        </p>
                        
                        <section className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                            <div className="p-4 bg-black border-2 border-white rounded-lg">
                                <video width="800" height="450" loop playsInline preload="auto" autoPlay muted>
                                    <source src="/videos/discostar_desktop.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="p-3 bg-black border-2 border-white rounded-lg -mt-20 sm:mt-0 sm:-ml-20">
                                <video width="170" height="300" loop playsInline preload="auto" autoPlay muted>
                                    <source src="/videos/discostar_mobile.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </section>

                        <a className="block mt-6" href="https://discostar.game" target="_blank" rel="noopener noreferrer">
                            <Button>Visiter le site</Button>
                        </a>
                    </div>
                </div>

                {/* Jouvency Project */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Jouvency</h2>
                        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
                            Ce client est une réalisation complète de A à Z, comprenant le design, le développement, ainsi que le déploiement.
                            Jouvency souhaitait un site web élégant et moderne pour présenter son activité, avec un design inspiré du luxe.
                            <br/>
                            <br/>
                            Nous avons commencé par créer des maquettes visuelles pour définir l&apos;apparence du site, en mettant l&apos;accent sur une esthétique haut de gamme.
                            <a href="https://www.figma.com/design/usRwZWb9rcIfWB9vTI4e39/Jouvency-V2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
                                Voir les maquettes sur Figma
                            </a>
                            <br/>
                            <br/>
                            Après quoi nous avons développé le site en utilisant wordpress afin de permettre à notre client d'administrer son site, avec <a href="https://swiperjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">SwiperJS</a> pour les carrousels, et <a href="https://gsap.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">GSAP</a> pour les animations.
                            <br/>
                            <br/>
                            Suite à la livraison de leurs contenus, nous avons intégré ces éléments pour finaliser le site web tout en jouant sur la transparence pour mettre en valeur les fond vidéos.
                        </p>


                        <section className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                            <div className="p-3 bg-black border-2 border-white rounded-lg">
                                <video width="800" height="450" loop playsInline preload="auto" autoPlay muted>
                                    <source src="/videos/jouvency_desktop.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="p-3 bg-black border-2 border-white rounded-lg -mt-20 sm:mt-0 sm:-ml-20">
                                <video width="170" height="300" loop playsInline preload="auto" autoPlay muted>
                                    <source src="/videos/jouvency_mobile.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </section>

                        <a className="block mt-6" href="https://discostar.game" target="_blank" rel="noopener noreferrer">
                            <Button>Visiter le site</Button>
                        </a>
                    </div>
                </div>

                {/* Additional content could go here for future projects */}
                <div className="text-center mt-16">
                    <p className="mb-4">
                        Ce site web à également été réalisé par nous même !
                        <br/>Son code source est disponible sur
                        <a href="https://github.com/Sacercode/website" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
                            GitHub
                        </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Plus de réalisations à venir... <br/>Peut-être avec vous ?
                        <Link className="block mt-6" href="/contact">
                            <Button>Contactez-nous !</Button>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}