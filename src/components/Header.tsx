import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';

type Timeout = ReturnType<typeof setTimeout>;

type NavLink = {
  name: string;
  href: string;
  dropdown?: Array<{
    name: string;
    href: string;
    onClick?: () => void;
  }>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleDropdownClick = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.2, 1]);
  const headerBackground = useTransform(
    scrollY, 
    [0, 100], 
    ['rgba(20, 21, 26, 0)', 'rgba(20, 21, 26, 0.8)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks: NavLink[] = [
    { name: 'Home', href: '#hero' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: services.map(service => ({
        name: service.title,
        href: `#services`,
        onClick: () => {
          const element = document.getElementById('services');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          setIsOpen(false);
        }
      }))
    },
    { 
      name: 'Portfolio', 
      href: '#portfolio',
      dropdown: projects.slice(0, 6).map((project) => ({
        name: project.title,
        href: `#portfolio`,
        onClick: () => {
          const element = document.getElementById('portfolio');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          setIsOpen(false);
        }
      }))
    },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? 'py-4' : 'py-6'}`}
      style={{ 
        backgroundColor: headerBackground,
        opacity: headerOpacity 
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2">
          <img 
            src="/images/464880993_472018949182080_6758788125714834740_n (2).jpg" 
            alt="Room Editors Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl font-serif font-medium">
            <span className="text-accent-500">Room</span> Editors
          </span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li 
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  <a 
                    href={link.href} 
                    className="text-sm uppercase tracking-wider hover:text-accent-500 transition-colors flex items-center"
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                        handleDropdownClick(link.name);
                      }
                    }}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                </div>
                
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-primary-900 rounded-md shadow-lg z-50"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                item.onClick?.();
                                setActiveDropdown(null);
                              }}
                              className="block px-4 py-2 text-sm text-gray-200 hover:bg-primary-800 hover:text-accent-500 transition-colors"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="btn-outline hidden md:block"
        >
          Get a Quote
        </button>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-primary-950 z-40 pt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <div className="flex flex-col">
                    <a 
                      href={link.href} 
                      className="text-2xl font-serif hover:text-accent-500 transition-colors flex items-center justify-between"
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault();
                          handleDropdownClick(link.name);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {link.name}
                      {link.dropdown && (
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </a>
                    
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden ml-4 mt-2 space-y-2"
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              item.onClick?.();
                              setActiveDropdown(null);
                            }}
                            className="block text-lg text-gray-300 hover:text-accent-500 transition-colors"
                          >
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </li>
              ))}
              <li>
                <button 
                  className="btn-primary mt-6 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;