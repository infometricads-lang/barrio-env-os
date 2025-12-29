import { Layout } from '@/components/layout/Layout';
import { LocationCard } from '@/components/locations/LocationCard';
import { locations } from '@/lib/locations';
import { t } from '@/lib/i18n';

const Locations = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t.locations.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.locations.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
