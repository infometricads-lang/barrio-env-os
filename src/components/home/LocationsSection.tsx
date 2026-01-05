import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LocationCard } from '@/components/locations/LocationCard';
import { locations } from '@/lib/locations';
import { t } from '@/lib/i18n';

export function LocationsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-72 h-64 sm:h-72 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-accent/10 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <h2 className="opacity-0 animate-fade-in">
            {t.locations.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
            {t.locations.subtitle}
          </p>
        </div>

        {/* Location cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <LocationCard location={location} />
            </div>
          ))}
        </div>

        {/* See all button */}
        <div className="text-center opacity-0 animate-fade-in animation-delay-500">
          <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 h-12">
            <Link to="/ubicaciones">
              {t.common.seeAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
