import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsapp from "./components/layout/FloatingWhatsapp";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}

export default App;
