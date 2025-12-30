import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, Send, Smartphone, Receipt, Coins } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getServiceBySlug } from '@/lib/services';

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
          <Button asChild className="mt-4">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a servicios
          </Link>

          <div className="max-w-2xl">
            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
              <IconComponent className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            ¿Qué incluye?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Necesitas este servicio?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Visítanos en cualquiera de nuestros locales. Te atenderemos de forma personalizada.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-xl gap-2 bg-white text-primary hover:bg-white/90"
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
