import Hero from "@/components/PageSpecific/Home/Sections/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
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
