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
          <Button asChild className="mt-4 rounded-xl">
            <Link to="/ubicaciones">Volver</Link>
          </Button>
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
          <div className="h-48 sm:h-64 md:h-80 relative">
            <img
              src={location.image}
              alt={`${location.name} - ${location.neighborhood}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        ) : (
          <div className="h-32 sm:h-48 bg-gradient-to-br from-primary/10 to-background" />
        )}
        
        <div className="container-custom relative -mt-16 sm:-mt-20 z-10">
          <Link 
            to="/ubicaciones" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3 sm:mb-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> {t.common.back}
          </Link>
          
          <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-lg border border-border">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {location.neighborhood}
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-2 sm:mt-3">
                  {location.name}
                </h1>
              </div>
              
              {location.googleRating && (
                <div className="flex items-center gap-2 bg-muted px-3 sm:px-4 py-2 rounded-xl self-start">
                  <Star className="h-4 sm:h-5 w-4 sm:w-5 fill-accent text-accent" />
                  <span className="text-lg sm:text-xl font-bold">{location.googleRating.score}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm">({location.googleRating.reviews})</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container-custom py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="card-interactive p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
            <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">{t.locations.address}</p>
              <p className="font-medium text-sm sm:text-base">{location.fullAddress.street}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {location.fullAddress.postalCode} {location.fullAddress.city}
              </p>
            </div>
          </div>
          
          <div className="card-interactive p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
            <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">{t.locations.phone}</p>
              <a 
                href={`tel:${location.phone.replace(/\s/g, '')}`} 
                className="font-medium text-sm sm:text-base hover:text-primary transition-colors"
              >
                {location.phone}
              </a>
              {location.web && (
                <a 
                  href={location.web} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline mt-1"
                >
                  <ExternalLink className="h-3 w-3" /> Web
                </a>
              )}
            </div>
          </div>
          
          <div className="card-interactive p-4 sm:p-5 flex items-start gap-3 sm:gap-4 sm:col-span-2 md:col-span-1">
            <Clock className="h-5 sm:h-6 w-5 sm:w-6 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">{t.locations.schedule}</p>
              <p className="font-medium text-sm sm:text-base">L-S: {location.schedule.weekdays}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Dom: {location.schedule.sunday}</p>
              {location.schedule.notes && (
                <p className="text-xs text-muted-foreground mt-1 italic">{location.schedule.notes}</p>
              )}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.locations.services}</h2>
          <div className="flex flex-wrap gap-2">
            {location.services.map((s) => (
              <span 
                key={s} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-xl text-xs sm:text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-border">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${location.name}`}
            className="w-full sm:h-[300px]"
          />
        </div>
        
        {/* Open in Maps button */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Button asChild variant="outline" size="sm" className="rounded-xl gap-2">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4" />
              Abrir en Google Maps
            </a>
          </Button>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pb-20 md:pb-0">
          <Button asChild size="lg" className="rounded-xl gap-2 flex-1 h-12">
            <a href={`tel:${location.phone.replace(/\s/g, '')}`}>
              <Phone className="h-5 w-5" />{t.locations.call}
            </a>
          </Button>
          {location.whatsapp && (
            <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 flex-1 h-12">
              <a href={`https://wa.me/${location.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />{t.locations.whatsapp}
              </a>
            </Button>
          )}
          <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 flex-1 h-12">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-5 w-5" />{t.locations.directions}
            </a>
          </Button>
        </div>
      </section>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-md border-t border-border md:hidden z-50 safe-bottom">
        <Button asChild size="lg" className="w-full rounded-xl gap-2 h-12 shadow-lg">
          <a href={`tel:${location.phone.replace(/\s/g, '')}`}>
            <Phone className="h-5 w-5" />{t.locations.call}
          </a>
        </Button>
      </div>
    </Layout>
  );
};

export default LocationDetail;
