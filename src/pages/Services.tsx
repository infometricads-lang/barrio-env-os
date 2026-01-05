import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send, Smartphone, Receipt, Coins } from 'lucide-react';
import { services } from '@/lib/services';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Send,
  Smartphone,
  Receipt,
  Coins,
};

const Services = () => {
  return (
    <Layout>
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 space-y-3">
            <h1 className="opacity-0 animate-fade-in">{t.services.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Send;
              return (
                <Link
                  key={service.id}
                  to={`/servicios/${service.slug}`}
                  className="group card-interactive p-0 overflow-hidden opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className={cn(
                      'absolute bottom-4 left-4 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md',
                      service.color
                    )}>
                      <IconComponent className="h-5 sm:h-6 w-5 sm:w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Ver más
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
