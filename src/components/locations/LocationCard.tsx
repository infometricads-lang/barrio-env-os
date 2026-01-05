import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Location } from '@/lib/locations';
import { t } from '@/lib/i18n';

interface LocationCardProps {
  location: Location;
  variant?: 'default' | 'compact';
}

export function LocationCard({ location, variant = 'default' }: LocationCardProps) {
  return (
    <article className="card-interactive overflow-hidden group h-full flex flex-col">
      {/* Image or placeholder */}
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {location.image ? (
          <img
            src={location.image}
            alt={`${location.name} - ${location.neighborhood}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            {/* Decorative circles for locations without images */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/30 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <span className="text-xs font-semibold text-primary-foreground bg-primary px-2.5 py-1 rounded-lg">
            {location.neighborhood}
          </span>
          {location.googleRating && (
            <div className="flex items-center gap-1 bg-background/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span className="text-xs font-semibold">{location.googleRating.score}</span>
              <span className="text-xs text-muted-foreground hidden sm:inline">({location.googleRating.reviews})</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {location.name}
        </h3>

        <div className="space-y-2 mb-4 flex-1">
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            <span className="line-clamp-2">{location.address}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary shrink-0" />
            <span>L-S: {location.schedule.weekdays}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary shrink-0" />
            <a 
              href={`tel:${location.phone.replace(/\s/g, '')}`} 
              className="hover:text-primary transition-colors"
            >
              {location.phone}
            </a>
          </div>
        </div>

        {/* Services preview */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {location.services.slice(0, 2).map((service) => (
            <span 
              key={service} 
              className="text-xs bg-muted px-2 py-1 rounded-lg text-muted-foreground"
            >
              {service.length > 20 ? service.substring(0, 20) + '...' : service}
            </span>
          ))}
          {location.services.length > 2 && (
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">
              +{location.services.length - 2}
            </span>
          )}
        </div>

        {/* CTA */}
        <Button
          asChild
          variant="outline"
          className="w-full rounded-xl group/btn mt-auto h-11"
        >
          <Link to={`/ubicaciones/${location.slug}`}>
            {t.locations.viewLocation}
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
