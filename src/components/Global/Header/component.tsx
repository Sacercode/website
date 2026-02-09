"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";
import ThemeSwitch from "../ThemeSwitch/component";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const currentPath = usePathname();

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
    const isActive = currentPath === href;
    return (
      <Link href={href} className={`link ${isActive ? "active" : ""} ${className}`} onClick={closeMenu}>
        {children}
      </Link>
    );
  };

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <div className="header__wrapper">
        <div className="header__control">
          <NavLink href="/" className="flex gap-6 items-center link">
            <Image
              src="/images/logo-sacercode.png"
              alt="Logo de Sacercode"
              width={50}
              height={50}
              className="rounded-lg"
            />
            Accueil
          </NavLink>
          <div className="header__menu__toggle" onClick={toggleMenu}>
            {isMenuOpen ? "Close" : "Menu"}
          </div>
        </div>

        <div className={`header__menu ${isMenuOpen ? "open" : ""}`}>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/realisations">Réalisations</NavLink>
          {/* <NavLink href="/logiciels">Logiciels</NavLink> */}
          <NavLink href="/equipe">L&apos;équipe</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}