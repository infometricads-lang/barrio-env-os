import { Link } from 'react-router-dom';
import { Shield, Clock, Users, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';

const trustItems = [
  { icon: Shield, label: 'Seguro' },
  { icon: Clock, label: 'Rápido' },
  { icon: Users, label: 'Cercano' },
  { icon: HeartHandshake, label: 'Confiable' },
];

export function TrustSection() {
  return (
    <section className="section-padding gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Icons row */}
          <div className="flex justify-center gap-4 sm:gap-8 md:gap-10 opacity-0 animate-fade-in">
            {trustItems.map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <item.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-foreground" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-primary-foreground/80">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold opacity-0 animate-fade-in animation-delay-200 text-primary-foreground">
              {t.trust.title}
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-300">
              {t.trust.subtitle}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in animation-delay-400">
            <Button
              asChild
              size="lg"
              className="rounded-xl text-base px-6 sm:px-8 bg-white text-primary hover:bg-white/90 h-12 sm:h-14 shadow-lg"
            >
              <Link to="/contacto">{t.trust.cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
