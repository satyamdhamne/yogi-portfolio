import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
