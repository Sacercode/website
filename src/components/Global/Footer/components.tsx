

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Sacercode. Tous droits réservés.
                </p>
                <p className="text-xs mt-2">
                    <a href="/mentions-legales" className="text-gray-400 hover:text-white">Mentions légales</a>
                </p>
            </div>
        </footer>
    );
}