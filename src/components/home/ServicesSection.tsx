import { Link } from 'react-router-dom';
import { Send, ArrowLeftRight, CreditCard, Coins, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Send,
    title: t.services.moneyTransfer,
    description: t.services.moneyTransferDesc,
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: ArrowLeftRight,
    title: t.services.localTransfer,
    description: t.services.localTransferDesc,
    color: 'bg-success/10 text-success',
  },
  {
    icon: CreditCard,
    title: t.services.billPayment,
    description: t.services.billPaymentDesc,
    color: 'bg-warning/10 text-warning',
  },
  {
    icon: Coins,
    title: t.services.currencyExchange,
    description: t.services.currencyExchangeDesc,
    color: 'bg-accent text-accent-foreground',
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-0 animate-fade-in">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="card-interactive p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center shrink-0', service.color)}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 opacity-0 animate-fade-in animation-delay-500">
          <Button asChild variant="outline" size="lg" className="rounded-xl gap-2">
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
