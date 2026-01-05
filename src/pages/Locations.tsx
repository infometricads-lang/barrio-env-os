import { Layout } from '@/components/layout/Layout';
import { LocationCard } from '@/components/locations/LocationCard';
import { locations } from '@/lib/locations';
import { t } from '@/lib/i18n';

const Locations = () => {
  return (
    <Layout>
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 space-y-3">
            <h1 className="opacity-0 animate-fade-in">{t.locations.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
              {t.locations.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
