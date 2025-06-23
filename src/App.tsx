import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set the page title
    document.title = 'Room Editors | Premium Interior Design Studio';
    
    // Remove data-default attribute from title if it exists
    const titleElement = document.querySelector('title');
    if (titleElement?.hasAttribute('data-default')) {
      titleElement.removeAttribute('data-default');
    }

    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  const HomePage = () => {
    // Scroll to hash section on mount if present
    useEffect(() => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100); // Wait for DOM to render
        }
      }
    }, []);

    return (
      <div className={`min-h-screen bg-primary-950 text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <StatisticsSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePage />} />
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
    </Router>
  );
}

export default App;