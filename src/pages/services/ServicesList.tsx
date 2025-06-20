import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const ServicesList = () => {
  return (
    <div className="min-h-screen bg-primary-900 text-primary-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto">
            Discover our comprehensive range of interior design services tailored to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="p-3 bg-accent-500/20 rounded-lg w-12 h-12 flex items-center justify-center text-accent-500 mb-4">
                {/* Icon would go here */}
                <span className="text-xl">{service.icon}</span>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-3">{service.title}</h2>
              <p className="text-primary-300 mb-6 flex-grow">{service.description}</p>
              <Link to={`/services/${service.id}`} className="mt-auto">
                <Button variant="link" className="px-0 text-accent-400 hover:text-accent-300 group">
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-medium mb-6">Not sure which service you need?</h2>
          <p className="text-primary-300 mb-8 max-w-2xl mx-auto">
            Our design experts are here to help you choose the perfect service for your project.
          </p>
          <Button size="lg" className="gap-2">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
