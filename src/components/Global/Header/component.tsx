import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black">
      <div className="max-w-10xl mx-auto px-4 py-6 flex items-center space-x-8">
        <Link href="/realisations" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Realisations
        </Link>
        <Link href="/fondateur" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Fondateur
        </Link>
        <Link href="/cube-3d" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Cube 3D
        </Link>
      </div>
    </header>
  );
}