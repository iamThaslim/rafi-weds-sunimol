import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';
import SaveTheDateSection from '@/components/SaveTheDateSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <SaveTheDateSection />
    </main>
  );
}
