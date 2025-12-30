import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowLeft, MessageCircle, Navigation, Star, ExternalLink } from 'lucide-react';
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

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;

  return (
    <Layout>
      {/* Hero with image */}
      <section className="relative">
        {location.image ? (
          <div className="h-64 md:h-80 relative">
            <img
              src={location.image}
              alt={`${location.name} - ${location.neighborhood}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-primary/10 to-background" />
        )}
        
        <div className="container-custom relative -mt-20 z-10">
          <Link to="/ubicaciones" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <ArrowLeft className="h-4 w-4" /> {t.common.back}
          </Link>
          
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {location.neighborhood}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mt-3">{location.name}</h1>
              </div>
              
              {location.googleRating && (
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-xl">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold">{location.googleRating.score}</span>
                  <span className="text-muted-foreground text-sm">({location.googleRating.reviews} reseñas)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card-interactive p-5 flex items-start gap-4">
            <MapPin className="h-6 w-6 text-primary shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t.locations.address}</p>
              <p className="font-medium">{location.fullAddress.street}</p>
              <p className="text-sm text-muted-foreground">
                {location.fullAddress.postalCode} {location.fullAddress.city}
              </p>
            </div>
          </div>
          
          <div className="card-interactive p-5 flex items-start gap-4">
            <Phone className="h-6 w-6 text-primary shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t.locations.phone}</p>
              <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="font-medium hover:text-primary transition-colors">
                {location.phone}
              </a>
              {location.web && (
                <a href={location.web} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline mt-1">
                  <ExternalLink className="h-3 w-3" /> Web
                </a>
              )}
            </div>
          </div>
          
          <div className="card-interactive p-5 flex items-start gap-4">
            <Clock className="h-6 w-6 text-primary shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t.locations.schedule}</p>
              <p className="font-medium">L-S: {location.schedule.weekdays}</p>
              <p className="text-sm text-muted-foreground">Dom: {location.schedule.sunday}</p>
              {location.schedule.notes && (
                <p className="text-xs text-muted-foreground mt-1 italic">{location.schedule.notes}</p>
              )}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{t.locations.services}</h2>
          <div className="flex flex-wrap gap-2">
            {location.services.map((s) => (
              <span key={s} className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="bg-muted rounded-2xl h-64 flex items-center justify-center mb-6 overflow-hidden">
          <div className="text-center p-6">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground mb-3">Vista del mapa</p>
            <Button asChild variant="outline" size="sm" className="rounded-xl">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4 mr-2" />
                Abrir en Google Maps
              </a>
            </Button>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="rounded-xl gap-2 flex-1">
            <a href={`tel:${location.phone.replace(/\s/g, '')}`}>
              <Phone className="h-5 w-5" />{t.locations.call}
            </a>
          </Button>
          {location.whatsapp && (
            <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 flex-1">
              <a href={`https://wa.me/${location.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />{t.locations.whatsapp}
              </a>
            </Button>
          )}
          <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 flex-1">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-5 w-5" />{t.locations.directions}
            </a>
          </Button>
        </div>
      </section>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t md:hidden z-40">
        <Button asChild size="lg" className="w-full rounded-xl gap-2">
          <a href={`tel:${location.phone.replace(/\s/g, '')}`}>
            <Phone className="h-5 w-5" />{t.locations.call}
          </a>
        </Button>
      </div>
    </Layout>
  );
};

export default LocationDetail;