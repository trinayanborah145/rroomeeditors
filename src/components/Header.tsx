import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { services } from '../data/services';
import { projects } from '../data/projects';

type Timeout = ReturnType<typeof setTimeout>;

type NavLink = {
  name: string;
  href: string;
  onClick?: () => void;
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
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveDropdown(null);
    }
  };
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks: NavLink[] = [
    { 
      name: 'Home', 
      href: '/',
      onClick: () => {
        if (isHomePage) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsOpen(false);
      }
    },
    { 
      name: 'Services', 
      href: isHomePage ? '#services' : '/services',
      dropdown: services.map(service => ({
        name: service.title,
        href: `/services/${service.id}`,
        onClick: () => {
          if (isHomePage) {
            const element = document.getElementById('services');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
          setIsOpen(false);
        }
      }))
    },
    { 
      name: 'Portfolio', 
      href: isHomePage ? '#portfolio' : '/#portfolio',
      dropdown: projects.slice(0, 6).map((project) => ({
        name: project.title,
        href: '/#portfolio',
        onClick: () => {
          if (isHomePage) {
            const element = document.getElementById('portfolio');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
          setIsOpen(false);
        }
      }))
    },
    { 
      name: 'About', 
      href: isHomePage ? '#about' : '/#about',
      onClick: () => {
        if (isHomePage) {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        setIsOpen(false);
      }
    },
    { 
      name: 'Contact', 
      href: isHomePage ? '#contact' : '/#contact',
      onClick: () => {
        if (isHomePage) {
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        setIsOpen(false);
      }
    }
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
        <Link to="/" className="flex items-center space-x-2" onClick={() => {
          if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <img 
            src="/images/464880993_472018949182080_6758788125714834740_n (2).jpg" 
            alt="Room Editors Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl font-serif font-medium">
            <span className="text-accent-500">Room</span> Editors
          </span>
        </Link>
        
        <div className="flex items-center">
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
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href} 
                        className="text-sm uppercase tracking-wider hover:text-accent-500 transition-colors flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          if (isHomePage) {
                            const element = document.querySelector(link.href);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          } else {
                            window.location.href = `/${link.href}`;
                          }
                          setIsOpen(false);
                        }}
                      >
                        {link.name}
                        {link.dropdown && (
                          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        )}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm uppercase tracking-wider hover:text-accent-500 transition-colors flex items-center"
                        onClick={() => {
                          if (link.onClick) link.onClick();
                          setIsOpen(false);
                        }}
                      >
                        {link.name}
                        {link.dropdown && (
                          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        )}
                      </Link>
                    )}
                  </div>
                  
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-primary-900 ring-1 ring-white/10 z-10"
                        >
                          <div className="py-1">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  item.onClick?.();
                                  setActiveDropdown(null);
                                }}
                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-primary-800 hover:text-accent-500 transition-colors"
                              >
                                {item.name}
                              </Link>
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
          
          <a
            href="https://wa.me/916901598958?text=I've%20came%20from%20your%20website%20and%20I%20want%20to%20get%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-outline ml-6"
          >
            Get a Quote
          </a>
          
          <button 
            className="md:hidden text-white ml-4 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-primary-950 z-40 pt-20 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-8">
              <nav>
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <div className="flex flex-col">
                        {link.href.startsWith('#') ? (
                          <a
                            href={link.href}
                            className="text-2xl font-serif hover:text-accent-500 transition-colors flex items-center justify-between"
                            onClick={(e) => {
                              e.preventDefault();
                              if (isHomePage) {
                                const element = document.querySelector(link.href);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              } else {
                                window.location.href = `/${link.href}`;
                              }
                              setIsOpen(false);
                            }}
                          >
                            {link.name}
                            {link.dropdown && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveDropdown(activeDropdown === link.name ? null : link.name);
                                }}
                                className="p-1"
                              >
                                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                              </button>
                            )}
                          </a>
                        ) : (
                          <div className="flex items-center justify-between">
                            <Link
                              to={link.href}
                              className="text-2xl font-serif hover:text-accent-500 transition-colors"
                              onClick={() => {
                                if (link.onClick) link.onClick();
                                setIsOpen(false);
                              }}
                            >
                              {link.name}
                            </Link>
                            {link.dropdown && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveDropdown(activeDropdown === link.name ? null : link.name);
                                }}
                                className="p-1"
                              >
                                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                              </button>
                            )}
                          </div>
                        )}
                        
                        {link.dropdown && activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-6 space-y-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    item.onClick?.();
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="block text-lg text-gray-300 hover:text-accent-500"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </li>
                  ))}
                  <li>
                    <a 
                      href="https://wa.me/916901598958?text=I've%20came%20from%20your%20website%20and%20I%20want%20to%20get%20a%20quote" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary mt-6 w-full block text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Get a Quote
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;