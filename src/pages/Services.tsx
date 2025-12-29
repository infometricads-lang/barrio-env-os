import { Layout } from '@/components/layout/Layout';
import { Send, ArrowLeftRight, CreditCard, Coins, Smartphone, Receipt } from 'lucide-react';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const services = [
  { icon: Send, title: t.services.moneyTransfer, description: t.services.moneyTransferDesc, color: 'bg-primary/10 text-primary' },
  { icon: ArrowLeftRight, title: t.services.localTransfer, description: t.services.localTransferDesc, color: 'bg-success/10 text-success' },
  { icon: CreditCard, title: t.services.billPayment, description: t.services.billPaymentDesc, color: 'bg-warning/10 text-warning' },
  { icon: Coins, title: t.services.currencyExchange, description: t.services.currencyExchangeDesc, color: 'bg-accent text-accent-foreground' },
  { icon: Smartphone, title: 'Recargas Móviles', description: 'Recarga tu móvil o el de tus familiares en cualquier operador nacional e internacional.', color: 'bg-primary/10 text-primary' },
  { icon: Receipt, title: 'Pago de Facturas', description: 'Paga tus facturas de servicios de forma cómoda y segura en nuestros locales.', color: 'bg-success/10 text-success' },
];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t.services.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="card-interactive p-6">
                <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center mb-4', service.color)}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
