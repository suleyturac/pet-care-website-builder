import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerSection from "@/components/PartnerSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PartnerSection />
      <AboutSection />
      <CTASection />
      <TestimonialsSection />
      <FAQSection />
      <ServiceAreaMap />
      <Footer />
    </div>
  );
};

export default Index;
