import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { t } from '@/lib/i18n';
import { Mail, Phone, MapPin } from 'lucide-react';

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
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t.contact.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.name}</Label>
                <Input id="name" name="name" placeholder={t.contact.namePlaceholder} required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.email}</Label>
                <Input id="email" name="email" type="email" placeholder={t.contact.emailPlaceholder} required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.contact.phone}</Label>
                <Input id="phone" name="phone" type="tel" placeholder={t.contact.phonePlaceholder} className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea id="message" name="message" placeholder={t.contact.messagePlaceholder} required rows={5} className="rounded-xl resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl" disabled={isSubmitting}>
                {isSubmitting ? t.contact.sending : t.contact.send}
              </Button>
            </form>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="card-interactive p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div><p className="font-medium">Ubicación</p><p className="text-muted-foreground">L'Hospitalet de Llobregat, Barcelona</p></div>
              </div>
              <div className="card-interactive p-6 flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <div><p className="font-medium">Teléfono</p><a href="tel:+34600000000" className="text-muted-foreground hover:text-primary">+34 600 000 000</a></div>
              </div>
              <div className="card-interactive p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <div><p className="font-medium">Email</p><a href="mailto:info@globalenvios.es" className="text-muted-foreground hover:text-primary">info@globalenvios.es</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
