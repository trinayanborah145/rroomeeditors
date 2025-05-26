import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

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
  const [activeService, setActiveService] = useState(services[0].id);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="services" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            {services.map((service) => {
              const IconComponent = getIconComponent(service.icon);
              const serviceId = getServiceId(service.title);
              const active = activeService === service.id;
              
              return (
                <motion.div
                  id={serviceId}
                  key={service.id}
                  variants={itemVariants}
                  className={`glass-card p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    active ? 'border-accent-500 shadow-xl' : 'hover:border-accent-500/50'
                  }`}
                  onClick={() => {
                    setActiveService(service.id);
                    window.history.pushState({}, '', `#${serviceId}`);
                    const element = document.getElementById(serviceId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent-500/20 rounded-md text-accent-500">
                      {IconComponent ? <IconComponent size={24} /> : service.title[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-medium mb-2">{service.title}</h3>
                      <p className="text-primary-300 text-sm line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Active service details */}
          <motion.div 
            className="glass-card p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {services.map((service) => {
              const IconComponent = getIconComponent(service.icon);
              
              return (
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 bg-accent-500/20 rounded-md text-accent-500 inline-block mb-4">
                      {IconComponent ? <IconComponent size={32} /> : service.title[0]}
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-4">{service.title}</h3>
                    <p className="text-primary-200 mb-6">{service.description}</p>
                    <a href="#contact" className="btn-outline inline-block">
                      Inquire About This Service
                    </a>
                  </motion.div>
                )
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;