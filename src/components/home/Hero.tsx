import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';
import heroImage from '@/assets/hero-money-transfer.jpg';

const features = [
  { icon: Globe, label: '+100 países', desc: 'Cobertura global' },
  { icon: Zap, label: 'Al instante', desc: 'Envío rápido' },
  { icon: Shield, label: '100% Seguro', desc: 'Garantizado' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-subtle min-h-[85vh] sm:min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Servicio de transferencias internacionales de dinero"
          className="w-full h-full object-cover opacity-15"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/80" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl opacity-60 animate-float" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/5 rounded-full blur-3xl opacity-80" />
      <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full blur-3xl opacity-40 animate-float animation-delay-300" />

      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium opacity-0 animate-fade-in">
              <Shield className="h-4 w-4" />
              <span>Agente autorizado Western Union</span>
            </div>

            <h1 className="opacity-0 animate-fade-in animation-delay-100">
              {t.hero.title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in animation-delay-200">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 opacity-0 animate-fade-in animation-delay-300">
              <Button 
                asChild 
                size="lg" 
                className="rounded-xl gap-2 text-base px-6 sm:px-8 shadow-glow h-12 sm:h-14"
              >
                <Link to="/ubicaciones">
                  <MapPin className="h-5 w-5" />
                  {t.hero.cta}
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-xl gap-2 text-base px-6 sm:px-8 h-12 sm:h-14"
              >
                <Link to="/servicios">
                  {t.hero.learnMore}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Feature badges - Mobile visible */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4 opacity-0 animate-fade-in animation-delay-400">
              {features.map((feature, index) => (
                <div 
                  key={feature.label}
                  className="flex items-center gap-2 sm:gap-3"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{feature.label}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element - Hidden on mobile, simplified on tablet */}
          <div className="hidden md:flex flex-1 w-full max-w-lg lg:max-w-xl opacity-0 animate-fade-in animation-delay-400">
            <div className="relative w-full">
              {/* Main card */}
              <div className="relative bg-card rounded-3xl p-6 lg:p-8 shadow-xl border border-border">
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
                
                {/* Content cards */}
                <div className="relative space-y-4">
                  <div className="bg-background rounded-2xl p-4 lg:p-5 shadow-soft hover-lift border border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Envíos Internacionales</p>
                        <p className="text-sm text-muted-foreground">A más de 100 países</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-2xl p-4 lg:p-5 shadow-soft hover-lift border border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Rápido y Seguro</p>
                        <p className="text-sm text-muted-foreground">Transferencias al instante</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-2xl p-4 lg:p-5 shadow-soft hover-lift border border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="text-2xl">🏪</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">En Tu Barrio</p>
                        <p className="text-sm text-muted-foreground">Atención cercana y personal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
