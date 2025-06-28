import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import { services } from '../data/services';
import type { Service } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

// Type for Lucide icon component
type IconComponentType = React.ComponentType<{ size?: number }>;

// Get icon component with proper typing
const getIconComponent = (iconName: string): IconComponentType | null => {
  const Icon = LucideIcons[iconName as keyof typeof LucideIcons] as unknown as IconComponentType;
  return Icon || null;
};

// Helper function to convert service title to URL-friendly ID
const getServiceId = (title: string) => `service-${title.toLowerCase().replace(/\s+/g, '-')}`;

const ServicesSection = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const { ref, inView } = useInView({
    threshold: 0.05, // Slightly lower threshold for earlier trigger
    triggerOnce: true,
    rootMargin: '-50px 0px', // Start animations slightly before element is in view
  });

  // Update active service when URL changes
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const service = services.find(s => `service-${s.title.toLowerCase().replace(/\s+/g, '-')}` === hash);
      if (service) {
        setActiveService(service);
      }
    }
  }, [location]);

  // Handle service click
  const handleServiceClick = (service: Service) => {
    setActiveService(service);
    const serviceId = `service-${service.title.toLowerCase().replace(/\s+/g, '-')}`;
    window.history.pushState({}, '', `#${serviceId}`);
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly faster stagger
        when: 'beforeChildren'
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      willChange: 'transform, opacity' // Optimize for animations
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, // Slightly faster animation
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for smoother motion
      },
      willChange: 'auto' // Reset will-change after animation
    }
  };
  
  return (
    <section id="services" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16 animate-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          viewport={{ once: true, margin: "-50px 0px" }}
        >
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">Our Services</h2>
          <p className="section-subheading mx-auto">
            We provide comprehensive interior design solutions tailored to your unique vision and requirements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services tabs */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.slice(0, 5).map((service) => {
              const IconComponent = getIconComponent(service.icon);
              const serviceId = getServiceId(service.title);
              const active = activeService.id === service.id;
              
              return (
                <motion.div
                  id={serviceId}
                  key={service.id}
                  variants={itemVariants}
                  className={`glass-card p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    active ? 'border-accent-500 shadow-xl' : 'hover:border-accent-500/50'
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent-500/20 rounded-md text-accent-500 group-hover:bg-accent-500/30 transition-colors">
                      {IconComponent ? <IconComponent size={24} /> : service.title[0]}
                    </div>
                    <div>
                      <Link to={`/services/${service.id}`} className="group">
                        <h3 className="text-xl font-serif font-medium mb-2 flex items-center group-hover:text-accent-400 transition-colors">
                          {service.title}
                          <ChevronRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </h3>
                      </Link>
                      <p className="text-primary-300 text-sm line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* See All Services Button */}
          <div className="flex justify-center mt-4">
            <Link to="/services">
              <button className="inline-flex items-center px-6 py-2 rounded-lg bg-accent-500 text-white font-medium shadow hover:bg-accent-600 transition-colors">
                See All Services
                <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Active service details */}
          <motion.div 
            className="glass-card p-8 rounded-2xl h-full flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-serif font-bold mb-6">
                {activeService.title}
              </h3>
              <p className="text-primary-300 mb-6">
                {activeService.description}
              </p>
              <p className="text-primary-300 mb-6">
                {activeService.overview.substring(0, 200)}...
              </p>
              <ul className="space-y-2 mb-4">
                {activeService.deliverables.slice(0, 3).map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span className="text-primary-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Link
                to={`/services/${activeService.id}`}
                className="inline-flex items-center text-base font-medium text-accent-400 hover:text-accent-300 transition-colors group border border-accent-400/20 hover:border-accent-400/40 rounded-lg px-5 py-2 bg-accent-400/5 hover:bg-accent-400/10"
              >
                Learn more about {activeService.title}
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/916901598958?text=I've%20came%20from%20your%20website%20and%20I%20want%20a%20free%20quote"
                className="inline-flex items-center text-base font-medium text-green-600 border border-green-600/20 hover:border-green-600/40 rounded-lg px-5 py-2 bg-green-600/5 hover:bg-green-600/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Quote on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;