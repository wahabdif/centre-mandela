import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`bg-white fixed w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Accueil - Centre D'Imagerie Benameur">
          <div className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer select-none">
            <div className="font-bold text-2xl font-heading text-gray-900">
              <span className="text-primary">Centre D'Imagerie</span>{" "}
              <span className="text-secondary">Benameur</span>
            </div>
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav
          aria-label="Menu principal"
          className="hidden md:flex items-center space-x-6 rtl:space-x-reverse text-dark font-medium"
        >
          <NavLink href="/" label="Accueil" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/temoignages" label="Témoignages" />
          <NavLink href="/contact" label="Contact" />
          <NavLink href="/rendez-vous" label="📅 Rendez-vous" />
          <LanguageSwitcher />
        </nav>

        {/* Bouton menu mobile */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus-visible:ring-primary rounded"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </Button>
      </div>

      {/* Navigation mobile */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu mobile"
          className="bg-white py-4 shadow-inner md:hidden"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4 text-dark font-medium">
            <NavLink href="/" label="Accueil" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/temoignages" label="Témoignages" />
            <NavLink href="/contact" label="Contact" />
            <NavLink href="/rendez-vous" label="📅 Rendez-vous" />
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps) {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link href={href}>
      <div
        tabIndex={0}
        className={`transition-colors cursor-pointer px-2 py-1 rounded focus:outline-none focus-visible:ring-primary ${
          isActive ? "text-primary font-semibold" : "text-dark hover:text-primary"
        }`}
        role="link"
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </div>
    </Link>
  );
}
