import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { LocationsSection } from '@/components/home/LocationsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TrustSection } from '@/components/home/TrustSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LocationsSection />
      <ServicesSection />
      <TrustSection />
    </Layout>
  );
};

export default Index;
