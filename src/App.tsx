import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatisticsSection from './components/StatisticsSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ServicesList from './pages/services/ServicesList';
import ServiceTemplate from './pages/services/ServiceTemplate';
import { useStructuredData } from './hooks/useStructuredData';
import SEO from './components/SEO';

// Define SEO data type
type SeoData = {
  title: string;
  description: string;
  keywords: string;
  type: 'website' | 'service';
} | null;

// Main Content Component
function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Use structured data hook
  useStructuredData(location.pathname === '/' ? 'service' : 'localBusiness');

  // Set default meta tags for the home page
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Set SEO data based on route
  const getRouteSeo = (): SeoData => {
    const path = location.pathname;

    if (path === '/') {
      return {
        title: 'Room Editors | Top Interior Designers in Nalbari, Assam',
        description: 'Transform your space with Room Editors - Nalbari\'s premier interior design studio. Specializing in false ceilings, modular kitchens, and complete home makeovers.',
        keywords: 'interior designer Nalbari, false ceiling designer Joymangla, modular kitchen Assam, home interior design, best interior designers in Assam',
        type: 'website' as const
      };
    } else if (path === '/services') {
      return {
        title: 'Our Services | Room Editors - Interior Design Nalbari',
        description: 'Explore our comprehensive interior design services in Nalbari, Assam. From false ceilings to complete home interiors, we bring your vision to life.',
        keywords: 'interior design services Nalbari, false ceiling installation, modular kitchen design, TV unit design, wallpaper installation Assam',
        type: 'website' as const
      };
    } else if (path.startsWith('/services/')) {
      // This will be handled by the ServiceTemplate component
      return null;
    }
    
    return {
      title: 'Room Editors | Interior Designers in Nalbari, Assam',
      description: 'Professional interior design services in Nalbari, Assam. Specialists in false ceilings, modular kitchens, and complete home interiors.',
      keywords: 'interior designer Nalbari, home decor Assam, room design, living room interior, bedroom design',
      type: 'website' as const
    };
  };

  const seoData = getRouteSeo();

  return (
    <div className="min-h-screen bg-primary-950 text-white">
      {seoData && (
        <SEO 
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          type={seoData.type}
        />
      )}
      
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <ServicesSection />
                  <StatisticsSection />
                  <PortfolioSection />
                  <AboutSection />
                  <TestimonialsSection />
                  <ContactSection />
                </>
              } />
              <Route path="/services" element={
                <div className={`min-h-screen bg-primary-950 text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  <Header />
                  <ServicesList />
                  <Footer />
                </div>
              } />
              <Route path="/services/:serviceId" element={
                <div className={`min-h-screen bg-primary-950 text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  <Header />
                  <ServiceTemplate />
                  <Footer />
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

// Main App with Router and HelmetProvider
const App = () => (
  <HelmetProvider>
    <Router>
      <AppContent />
    </Router>
  </HelmetProvider>
);

export default App;