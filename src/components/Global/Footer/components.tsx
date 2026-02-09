import "./styles.css";

export default function Footer() {
    return (
        <footer className="footer">
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