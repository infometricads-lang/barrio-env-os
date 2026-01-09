import { Link } from 'react-router-dom';
import { Send, Smartphone, Receipt, Coins, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Send,
  Smartphone,
  Receipt,
  Coins,
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <h2 className="opacity-0 animate-fade-in">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services grid with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {services.slice(0, 4).map((service, index) => {
            const IconComponent = iconMap[service.icon] || Send;
            return (
              <Link
                key={service.id}
                to={`/servicios/${service.slug}`}
                className="opacity-0 animate-fade-in group"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="card-interactive p-0 overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-32 sm:h-36 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={cn(
                        'w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 -mt-8 sm:-mt-10 relative z-10 shadow-md',
                        service.color
                      )}>
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="space-y-1.5 pt-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 opacity-0 animate-fade-in animation-delay-500">
          <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 h-12">
            <Link to="/servicios">
              Ver todos los servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
