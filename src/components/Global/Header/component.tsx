import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black">
      <div className="max-w-10xl mx-auto px-4 py-6">
        <Link href="/realisations" className="text-2xl font-bold text-gray-900 dark:text-white">
          Realisations
        </Link>
        <Link href="/fondateur" className="text-2xl font-bold text-gray-900 dark:text-white">
          Fondateur
        </Link>
      </div>
    </header>
  );
}