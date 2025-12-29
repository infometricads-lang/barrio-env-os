import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary-light">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60 animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-80" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl opacity-40 animate-float animation-delay-300" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16 md:py-24 lg:py-32">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight opacity-0 animate-fade-in">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in animation-delay-100">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 opacity-0 animate-fade-in animation-delay-200">
              <Button asChild size="lg" className="rounded-xl gap-2 text-base px-8 shadow-glow">
                <Link to="/ubicaciones">
                  <MapPin className="h-5 w-5" />
                  {t.hero.cta}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 text-base px-8">
                <Link to="/servicios">
                  {t.hero.learnMore}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none opacity-0 animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-primary/10">
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/40 rounded-full blur-xl" />
                
                {/* Content cards */}
                <div className="relative space-y-4">
                  <div className="bg-card rounded-2xl p-5 shadow-soft hover-lift">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Envíos Internacionales</p>
                        <p className="text-sm text-muted-foreground">A más de 100 países</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-2xl p-5 shadow-soft hover-lift">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Rápido y Seguro</p>
                        <p className="text-sm text-muted-foreground">Transferencias al instante</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-2xl p-5 shadow-soft hover-lift">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
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
