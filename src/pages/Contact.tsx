import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { t } from '@/lib/i18n';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to backend edge function
    await new Promise(r => setTimeout(r, 1000));
    toast({ title: t.contact.success });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 space-y-3">
            <h1 className="opacity-0 animate-fade-in">{t.contact.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 opacity-0 animate-fade-in animation-delay-200">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">{t.contact.name}</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder={t.contact.namePlaceholder} 
                  required 
                  className="rounded-xl h-12" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">{t.contact.email}</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder={t.contact.emailPlaceholder} 
                  required 
                  className="rounded-xl h-12" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">{t.contact.phone}</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder={t.contact.phonePlaceholder} 
                  className="rounded-xl h-12" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">{t.contact.message}</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder={t.contact.messagePlaceholder} 
                  required 
                  rows={5} 
                  className="rounded-xl resize-none" 
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-xl h-12 gap-2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t.contact.sending
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t.contact.send}
                  </>
                )}
              </Button>
            </form>

            {/* Contact info */}
            <div className="space-y-4 opacity-0 animate-fade-in animation-delay-300">
              <div className="card-interactive p-5 sm:p-6 flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-sm sm:text-base text-muted-foreground">L'Hospitalet de Llobregat, Barcelona</p>
                </div>
              </div>
              <div className="card-interactive p-5 sm:p-6 flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a href="tel:+34664573320" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    664 57 33 20
                  </a>
                </div>
              </div>
              <div className="card-interactive p-5 sm:p-6 flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:info@globalenvios.es" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    info@globalenvios.es
                  </a>
                </div>
              </div>

              {/* Schedule note */}
              <div className="bg-muted/50 rounded-2xl p-5 sm:p-6 border border-border">
                <p className="font-semibold text-foreground mb-2">Horario de atención</p>
                <p className="text-sm text-muted-foreground">
                  Lunes a Sábado: 10:00 - 21:00<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
