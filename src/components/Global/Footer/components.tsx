import "./styles.css";

export default function Footer() {
    return (
        <footer className="dark:bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 dark:text-white
        bg-gray-200 text-black p-6 pb-40">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Sacercode. Tous droits réservés. - <a href="/mentions-legales">Mentions légales</a> - <a href="/politique-confidentialite">Politique de confidentialité</a>
                </p>
                <p className="text-xs mt-2">
                    Ce site web n&apos;utilise pas de cookies et ne collecte aucune donnée personnelle.
                </p>
            </div>
        </footer>
    );
}