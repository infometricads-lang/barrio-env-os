import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: '¿Qué documentos necesito para enviar dinero?',
    answer: 'Para enviar dinero necesitas un documento de identificación válido (DNI, NIE o pasaporte). Dependiendo del importe, pueden solicitarte documentación adicional según la normativa de prevención de blanqueo de capitales.',
  },
  {
    question: '¿Cuánto tarda en llegar el dinero al destino?',
    answer: 'La mayoría de los envíos llegan en minutos. Con Western Union, MoneyGram y Ria, el dinero suele estar disponible para retiro inmediato. Algunas transferencias bancarias pueden tardar 1-3 días hábiles.',
  },
  {
    question: '¿Cuáles son las comisiones por enviar dinero?',
    answer: 'Las comisiones varían según el destino, el importe y el método de envío. Ofrecemos tarifas competitivas y te informamos del coste exacto antes de confirmar la operación. ¡Consulta en nuestros locales!',
  },
  {
    question: '¿Puedo hacer seguimiento de mi envío?',
    answer: 'Sí, al realizar el envío recibirás un número de referencia (MTCN) con el que podrás hacer seguimiento. También podemos consultar el estado de tu transferencia en cualquiera de nuestros locales.',
  },
  {
    question: '¿Hay un límite máximo para enviar dinero?',
    answer: 'Sí, existen límites que dependen del operador utilizado y de la normativa vigente. Generalmente puedes enviar hasta 3.000€ sin documentación adicional. Para importes mayores, contáctanos.',
  },
  {
    question: '¿Qué países están disponibles para envíos?',
    answer: 'Trabajamos con las principales redes internacionales como Western Union, MoneyGram y Ria, lo que nos permite enviar dinero a más de 200 países y territorios en todo el mundo.',
  },
  {
    question: '¿Aceptan pagos con tarjeta?',
    answer: 'Actualmente aceptamos pagos en efectivo para garantizar las mejores comisiones. Algunos servicios pueden ofrecer pago con tarjeta con un pequeño recargo.',
  },
  {
    question: '¿Qué hago si hay un problema con mi envío?',
    answer: 'Ven a cualquiera de nuestros locales con tu número de referencia y recibo. Nuestro equipo te ayudará a resolver cualquier incidencia lo antes posible. También puedes llamarnos por teléfono.',
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 space-y-3">
          <h2 className="opacity-0 animate-fade-in">
            Preguntas frecuentes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
            Resolvemos tus dudas sobre envíos de dinero
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-5 sm:px-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 50}ms` }}
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-4 sm:py-5 hover:no-underline hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4 sm:pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Help CTA */}
        <div className="text-center mt-10 md:mt-12 opacity-0 animate-fade-in animation-delay-500">
          <p className="text-muted-foreground text-sm sm:text-base">
            ¿Tienes más preguntas?{' '}
            <a
              href="/contacto"
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
