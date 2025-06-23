import { Instagram, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-primary-900 relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-primary-950">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/464880993_472018949182080_6758788125714834740_n (2).jpg" 
                alt="Room Editors Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <h3 className="text-2xl font-serif font-medium">
                <span className="text-accent-500">Room</span> Editors
              </h3>
            </div>
            <p className="text-primary-300 mb-6">
              Transform your space with our expert room editing services. Create the perfect atmosphere for every room in your home or office.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/room.editors/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-800 rounded-full hover:bg-accent-600 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-primary-300">
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">Residential Design</Link></li>
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">Commercial Design</Link></li>
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">3D Visualization</Link></li>
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">Custom Furniture</Link></li>
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">TV Unit Design</Link></li>
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">Semi Modular Kitchen</Link></li>
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">Full Modular Kitchen</Link></li>
              <li><Link to={isHomePage ? '#services' : '/#services'} className="hover:text-accent-500 transition-colors">Renovation Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-primary-300">
              <li><Link to={isHomePage ? '#about' : '/#about'} onClick={(e) => scrollToSection('about', e)} className="hover:text-accent-500 transition-colors">About Us</Link></li>
              <li><Link to={isHomePage ? '#portfolio' : '/#portfolio'} onClick={(e) => scrollToSection('portfolio', e)} className="hover:text-accent-500 transition-colors">Portfolio</Link></li>
              <li><Link to="#" className="hover:text-accent-500 transition-colors">Careers</Link></li>
              <li><Link to={isHomePage ? '#contact' : '/#contact'} onClick={(e) => scrollToSection('contact', e)} className="hover:text-accent-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-primary-300 mb-4">
              Subscribe to our newsletter for design inspiration, tips, and updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 bg-primary-800 border border-primary-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="px-4 py-3 bg-accent-600 hover:bg-accent-500 transition-colors rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-400 text-sm text-center md:text-left">
            &copy; 2025 Room Editors. Designed by Tricone Digital Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-400 text-sm hover:text-accent-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-400 text-sm hover:text-accent-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-400 text-sm hover:text-accent-500 transition-colors">Sitemap</a>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-accent-600 hover:bg-accent-500 transition-colors rounded-full shadow-lg z-20"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;