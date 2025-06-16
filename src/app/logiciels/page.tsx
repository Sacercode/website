import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'équipe - Sacercode",
  description: "Découvrez l'équipe de Sacercode, société de conseil et formation en informatique.",
};

export default function Equipe() {
  return (
    <div>
      <h1>Logiciels</h1>
      <section>
        <h2 className="text-2xl font-bold mb-4">EditIDE</h2>
        <p>Ce logiciel en tant que service (SaaS) en cours de développement permettra de créer des sites webs de manière simplifiée.</p>
        <a href="https://editide.fr" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Accéder au logiciel</button>
        </a>
      </section>
    </div>
  )
}