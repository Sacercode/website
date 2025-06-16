

export default function Realisations() {
    return (
        <section className="flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white p-6">
            <h1 className="text-4xl font-bold mb-6">Nos Réalisations</h1>
            <p className="text-lg max-w-2xl text-center mb-12">
                Découvrez nos projets récents et comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des solutions informatiques sur mesure.
            </p>
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-4">
                <div className="max-w-4xl w-full px-4">
                    <h3>Disco Star</h3>
                    <p>Nous avons réalisé le site internet de ce tout premier jeu mobile inspiré par l&apos;iconique groupe Village People !</p>
                    <a href="https://discostar.game" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Visiter le site</button>
                    </a>
                </div>
            </div>
        </section>
    );
}