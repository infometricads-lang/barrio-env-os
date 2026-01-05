import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { LocationsSection } from '@/components/home/LocationsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { TrustSection } from '@/components/home/TrustSection';
import { MobileCallButton } from '@/components/layout/MobileCallButton';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LocationsSection />
      <ServicesSection />
      <ReviewsSection />
      <FAQSection />
      <TrustSection />
      <MobileCallButton />
    </Layout>
  );
};

export default Index;
