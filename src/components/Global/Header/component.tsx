import Link from "next/link";
import Image from "next/image";
import "./styles.css";

export default function Header() {
  return (
    <header className="header bg-white dark:bg-black">
      <div className="max-w-10xl mx-auto flex items-center space-x-8">
        <Link href="/" className="flex gap-6 items-center link">
          <Image
            src="./images/logo-sacercode.png"
            alt="Logo de Sacercode"
            width={50}
            height={50}
            className="rounded-lg"
          />
          Accueil
        </Link>
        <Link href="/services" className="link">
          Services
        </Link>
        <Link href="/realisations" className="link">
          Réalisations
        </Link>
        <Link href="/logiciels" className="link">
          Logiciels
        </Link>
        <Link href="/equipe" className="link">
          L&apos;équipe
        </Link>
      </div>
    </header>
  );
}