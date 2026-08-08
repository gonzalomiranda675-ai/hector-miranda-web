import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ValuePropSection from "@/components/sections/ValuePropSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import SituationsSection from "@/components/sections/SituationsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropSection />
        <ServicesSection />
        <AboutSection />
        <CredentialsSection />
        <SituationsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
