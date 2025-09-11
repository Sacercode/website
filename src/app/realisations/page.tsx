import Button from "@/components/Button/Button";
import Carousel from "@/components/Global/Carousel/component";
import Link from "next/link";

const discoStarImages = [
  {
    src: "/images/disco-star/iphone_disco_star.png",
    alt: "Disco Star - Version iPhone",
    width: 800,
    height: 450,
  },
  {
    src: "/images/disco-star/ipad_disco_star.png",
    alt: "Disco Star - Version iPad",
    width: 800,
    height: 450,
  },
  {
    src: "/images/disco-star/macbook_disco_star.png",
    alt: "Disco Star - Version MacBook",
    width: 800,
    height: 450,
  },
];

export default function Realisations() {
    return (
        <section className="flex flex-col items-center">
            <div className="max-w-3xl w-full flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Nos réalisations</h1>
                <p className="text-lg max-w-xl text-center mb-16 mx-auto leading-relaxed">
                    Découvrez nos projets récents et comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des solutions informatiques sur mesure.
                </p>
                
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Client confidentiel</h2>
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
                        
                        <Carousel 
                            images={discoStarImages}
                            autoRotate={true}
                            rotationInterval={5000} 
                        />

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