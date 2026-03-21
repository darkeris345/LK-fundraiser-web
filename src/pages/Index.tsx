import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import HowToHelpSection from "@/components/HowToHelpSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PhotoCarousel />
      <HowToHelpSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
