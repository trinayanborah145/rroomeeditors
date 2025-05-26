import { Instagram, Facebook, Pointer as Pinterest, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
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
            <h3 className="text-2xl font-serif font-medium mb-6">
              <span className="text-accent-500">Room</span> Editors
            </h3>
            <p className="text-primary-300 mb-6">
              Transform your space with our expert room editing services. Create the perfect atmosphere for every room in your home or office.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-800 rounded-full hover:bg-accent-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-800 rounded-full hover:bg-accent-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-800 rounded-full hover:bg-accent-600 transition-colors" aria-label="Pinterest">
                <Pinterest size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-800 rounded-full hover:bg-accent-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-primary-300">
              <li><a href="#service-residential-design" className="hover:text-accent-500 transition-colors">Residential Design</a></li>
              <li><a href="#service-commercial-design" className="hover:text-accent-500 transition-colors">Commercial Design</a></li>
              <li><a href="#service-3d-visualization" className="hover:text-accent-500 transition-colors">3D Visualization</a></li>
              <li><a href="#service-custom-furniture" className="hover:text-accent-500 transition-colors">Custom Furniture</a></li>
              <li><a href="#service-tv-unit-design" className="hover:text-accent-500 transition-colors">TV Unit Design</a></li>
              <li><a href="#service-semi-modular-kitchen" className="hover:text-accent-500 transition-colors">Semi Modular Kitchen</a></li>
              <li><a href="#service-full-modular-kitchen" className="hover:text-accent-500 transition-colors">Full Modular Kitchen</a></li>
              <li><a href="#service-renovation-consultation" className="hover:text-accent-500 transition-colors">Renovation Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-primary-300">
              <li><a href="#about" className="hover:text-accent-500 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-accent-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-accent-500 transition-colors">Contact</a></li>
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
            &copy; 2025 Room Editors. All rights reserved.
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