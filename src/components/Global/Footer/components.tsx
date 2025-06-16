import "./styles.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Sacercode. Tous droits réservés.
                </p>
                <p className="text-xs mt-2">
                    Le code source de ce site est disponible sur
                    <a href="https://github.com/Sacercode/website" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
                        GitHub
                    </a> - <a href="/mentions-legales">Mentions légales</a>
                </p>
            </div>
        </footer>
    );
}