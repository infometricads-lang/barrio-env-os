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
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-0 animate-fade-in">
            {t.locations.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
            {t.locations.subtitle}
          </p>
        </div>

        {/* Location cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
          <Button asChild variant="outline" size="lg" className="rounded-xl gap-2">
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
