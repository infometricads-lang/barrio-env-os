import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { t } from '@/lib/i18n';
import logo from '@/assets/logo.png';

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
      <div className="container-custom py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <img src={logo} alt="Super Transferencias" className="h-[95%] w-[95%] object-contain" />
              </div>
              <span className="text-xl font-bold text-background font-display">Super Transferencias</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wide">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wide">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wide">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>L'Hospitalet de Llobregat, Barcelona</span>
              </li>
              <li>
                <a
                  href="tel:+34664573320"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>664 57 33 20</span>
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
        <div className="mt-10 sm:mt-12 pt-6 border-t border-background/10">
          <p className="text-center text-xs sm:text-sm text-background/50">
            © {currentYear} Super Transferencias. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
