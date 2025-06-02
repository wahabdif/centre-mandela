import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl font-heading mb-2">{t('footer.title')}</div>
            <p className="text-sm opacity-75">{t('footer.subtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            <FooterLink href="/" label={t('nav.home')} />
            <FooterLink href="/services" label={t('nav.services')} />
            <FooterLink href="/rendez-vous" label={t('nav.appointment')} />
            <FooterLink href="/temoignages" label={t('nav.testimonials')} />
            <FooterLink href="/contact" label={t('nav.contact')} />
          </div>

          <div className="text-sm opacity-75 text-center md:text-right">
            © {new Date().getFullYear()} {t('footer.rights')}
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
      <div className="hover:text-secondary transition-colors cursor-pointer">{label}</div>
    </Link>
  );
}
