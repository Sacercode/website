
import Cube from "@/components/3D/Cube";
import Hero from "@/components/PageSpecific/Home/Sections/Hero";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Hero/>
            <section className="flex flex-col items-center text-center mt-10">
                <main className="max-w-2xl">
                    <div className="w-full h-96 mb-6">
                        <Cube />
                    </div>
                    <h2>Démonstration Technologique</h2>
                    <h3>Cube 3D Interactif</h3>
                    <p>Découvrez notre expertise en développement 3D avec cette démonstration interactive utilisant React Three Fiber. Un cube en verre avec des effets de réflexion et d&apos;éclairage avancés.</p>
                    <Link href="/cube-3d">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                            Voir la démo 3D
                        </button>
                    </Link>
                </main>
            </section>
            <section className="flex flex-col items-center text-center mt-10">
                <main className="max-w-2xl">
                    <h2>Réalisations client</h2>
                    <h3>Disco Star</h3>
                    <p>Nous avons réalisé le site internet de ce tout premier jeu mobile inspiré par l&apos;iconique groupe Village People !</p>
                    <a href="https://discostar.game" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Visiter le site</button>
                    </a>
                </main>
                </section>
                <section className="flex flex-col items-center text-center mt-10">
                <main className="max-w-2xl">
                    <h2>EditIDE</h2>
                    <p>Ce logiciel SaaS en cours de développement permettra de créer des sites webs de manière simplifiée.</p>
                    <a href="https://editide.fr" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Accéder au logiciel</button>
                    </a>
                </main>
                </section>
                <section className="flex flex-col items-center text-center mt-10">
                <main className="max-w-2xl">
                    <h2>A propos du fondateur</h2>
                    <p>Dorian Blanchard est un ingénieur informatique spécialisé dans le développement web, avec une expertise dans la création de sites web adaptés à toutes tailles d&apos;écrans.</p>
                    <a href="https://blanchardorian.fr" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Voir son portfolio</button>
                    </a>
                </main>
            </section>
        </>
    );
}
