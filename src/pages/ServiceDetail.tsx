import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, Send, Smartphone, Receipt, Coins } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getServiceBySlug } from '@/lib/services';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Send,
  Smartphone,
  Receipt,
  Coins,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold">Servicio no encontrado</h1>
          <Button asChild className="mt-4 rounded-xl">
            <Link to="/servicios">Volver a servicios</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const IconComponent = iconMap[service.icon] || Send;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="container-custom relative z-10 py-12 sm:py-16 md:py-24">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 sm:mb-6 transition-colors bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a servicios
          </Link>

          <div className="max-w-2xl">
            <div className={cn(
              'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md',
              service.color
            )}>
              <IconComponent className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8" />
            </div>
            <h1 className="mb-3 sm:mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/40">
        <div className="container-custom">
          <h2 className="text-center mb-6 sm:mb-8">
            ¿Qué incluye?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary-foreground">
            ¿Necesitas este servicio?
          </h2>
          <p className="text-primary-foreground/80 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Visítanos en cualquiera de nuestros locales. Te atenderemos de forma personalizada.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-xl gap-2 bg-white text-primary hover:bg-white/90 h-12 sm:h-14 shadow-lg"
          >
            <Link to="/ubicaciones">
              <MapPin className="h-5 w-5" />
              Encuentra tu local
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
