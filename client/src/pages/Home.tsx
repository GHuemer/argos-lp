import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MethodologySection from '@/components/MethodologySection';
import OfferSection from '@/components/OfferSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Offer Section */}
      <OfferSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
