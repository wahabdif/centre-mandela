import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl font-heading mb-2">Centre D'Imagerie Benameur</div>
            <p className="text-sm opacity-75">Excellence en imagerie médicale à Oran</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            <FooterLink href="/" label="Accueil" />
            <FooterLink href="/services" label="Services" />
            <FooterLink href="/rendez-vous" label="Rendez-vous" />
            <FooterLink href="/temoignages" label="Témoignages" />
            <FooterLink href="/contact" label="Contact" />
          </div>
          
          <div className="text-sm opacity-75">
            © {new Date().getFullYear()} Centre D'Imagerie Benameur - Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href}>
      <div className="hover:text-secondary transition-colors cursor-pointer">
        {label}
      </div>
    </Link>
  );
}
