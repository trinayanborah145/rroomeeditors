import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatisticsSection from './components/StatisticsSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set the page title
    document.title = 'Room Editors | Premium Interior Design Studio';
    
    // Remove data-default attribute from title if it exists
    const titleElement = document.querySelector('title');
    if (titleElement?.hasAttribute('data-default')) {
      titleElement.removeAttribute('data-default');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-primary-950 text-white">
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
}

export default App;