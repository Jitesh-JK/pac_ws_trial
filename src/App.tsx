import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import ResourcesSection from './components/ResourcesSection';

function App() {
  return (
    <div className="min-h-screen bg-cosmic-black text-white scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <TeamSection />
      <ResourcesSection />
    </div>
  );
}

export default App;
