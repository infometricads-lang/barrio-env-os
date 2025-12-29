import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { t } from '@/lib/i18n';

const quickLinks = [
  { href: '/', label: t.nav.home },
  { href: '/ubicaciones', label: t.nav.locations },
  { href: '/servicios', label: t.nav.services },
  { href: '/contacto', label: t.nav.contact },
];

const legalLinks = [
  { href: '/privacidad', label: t.footer.privacy },
  { href: '/terminos', label: t.footer.terms },
  { href: '/cookies', label: t.footer.cookies },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/90">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <span className="text-lg font-bold text-primary-foreground">G</span>
              </div>
              <span className="text-xl font-semibold text-background">GlobalEnvíos</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>L'Hospitalet de Llobregat, Barcelona</span>
              </li>
              <li>
                <a
                  href="tel:+34600000000"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>+34 600 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@globalenvios.es"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span>info@globalenvios.es</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-background/10">
          <p className="text-center text-sm text-background/50">
            © {currentYear} GlobalEnvíos. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
