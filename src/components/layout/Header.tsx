import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navItems = [
  { href: '/', label: t.nav.home },
  { href: '/ubicaciones', label: t.nav.locations },
  { href: '/servicios', label: t.nav.services },
  { href: '/contacto', label: t.nav.contact },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden bg-white shadow-sm border border-border/50 flex items-center justify-center p-1.5">
              <img src={logo} alt="Super Transferencias" className="h-full w-full object-contain" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground font-display">Super Transferencias</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="rounded-xl gap-2 shadow-sm">
              <Link to="/ubicaciones">
                <MapPin className="h-4 w-4" />
                {t.nav.findLocation}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-xl transition-colors',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Button asChild className="w-full rounded-xl gap-2 h-12">
                  <Link to="/ubicaciones">
                    <MapPin className="h-5 w-5" />
                    {t.nav.findLocation}
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
