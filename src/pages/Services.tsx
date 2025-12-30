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
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t.services.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Send;
              return (
                <Link
                  key={service.id}
                  to={`/servicios/${service.slug}`}
                  className="group card-interactive p-0 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className={cn(
                      'absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center',
                      service.color
                    )}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
