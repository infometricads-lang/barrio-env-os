import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowLeft, MessageCircle, Navigation } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getLocationBySlug } from '@/lib/locations';
import { t } from '@/lib/i18n';

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug || '');

  if (!location) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold">Local no encontrado</h1>
          <Button asChild className="mt-4"><Link to="/ubicaciones">Volver</Link></Button>
        </div>
      </Layout>
    );
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-background py-12">
        <div className="container-custom">
          <Link to="/ubicaciones" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> {t.common.back}
          </Link>
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{location.neighborhood}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">{location.name}</h1>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="card-interactive p-5 flex items-start gap-4">
            <MapPin className="h-6 w-6 text-primary shrink-0" />
            <div><p className="text-sm text-muted-foreground">{t.locations.address}</p><p className="font-medium">{location.address}</p></div>
          </div>
          <div className="card-interactive p-5 flex items-start gap-4">
            <Phone className="h-6 w-6 text-primary shrink-0" />
            <div><p className="text-sm text-muted-foreground">{t.locations.phone}</p><a href={`tel:${location.phone}`} className="font-medium hover:text-primary">{location.phone}</a></div>
          </div>
          <div className="card-interactive p-5 flex items-start gap-4">
            <Clock className="h-6 w-6 text-primary shrink-0" />
            <div><p className="text-sm text-muted-foreground">{t.locations.schedule}</p><p className="font-medium">L-V: {location.schedule.weekdays}</p><p className="text-sm text-muted-foreground">Sáb: {location.schedule.saturday}</p></div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{t.locations.services}</h2>
          <div className="flex flex-wrap gap-2">
            {location.services.map((s) => (<span key={s} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">{s}</span>))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="bg-muted rounded-2xl h-64 flex items-center justify-center mb-6">
          <p className="text-muted-foreground">Mapa (requiere API key de Google Maps)</p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="rounded-xl gap-2 flex-1"><a href={`tel:${location.phone}`}><Phone className="h-5 w-5" />{t.locations.call}</a></Button>
          {location.whatsapp && <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 flex-1"><a href={`https://wa.me/${location.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />{t.locations.whatsapp}</a></Button>}
          <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 flex-1"><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="h-5 w-5" />{t.locations.directions}</a></Button>
        </div>
      </section>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t md:hidden z-40">
        <Button asChild size="lg" className="w-full rounded-xl gap-2"><a href={`tel:${location.phone}`}><Phone className="h-5 w-5" />{t.locations.call}</a></Button>
      </div>
    </Layout>
  );
};

export default LocationDetail;
