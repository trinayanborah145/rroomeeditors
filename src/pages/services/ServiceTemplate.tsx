import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../../data/services';
import type { Service } from '../../data/services';
import { Button } from '../../components/ui/button';
import { ArrowLeft, Phone, Mail } from 'lucide-react';

const ServiceTemplate = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts or when serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  const service = services.find((s: Service) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-primary-900 text-primary-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/services')} className="mt-4">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-900 text-primary-100">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-200 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 text-center bg-gradient-to-b from-primary-800 to-primary-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-primary-300 mb-8 max-w-2xl mx-auto">
            {service.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Get a Free Quote
            </a>
            <Button variant="outline" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-primary-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Our Deliverables</h3>
              <ul className="space-y-3">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Project Timeline</h3>
              <p className="mb-6 text-primary-200">{service.timeline}</p>
              {service.tools && service.tools.length > 0 && (
                <>
                  <h4 className="font-medium mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary-800/50 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {service.portfolio && service.portfolio.length > 0 && (
        <section className="py-16 px-4 bg-primary-950/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Our Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.portfolio.map((item, index) => (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-primary-800/30"
                >
                  <div className="h-48 bg-primary-800/50 flex items-center justify-center">
                    <span className="text-primary-400">Image: {item.title}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-primary-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Why Choose Room Editors
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Our Approach</h3>
              <p className="mb-6 text-primary-200">
                {service.whyChooseUs}
              </p>
              {service.testimonial && (
                <blockquote className="border-l-4 border-accent-500 pl-4 italic text-primary-200">
                  "{service.testimonial.quote}"
                  <footer className="mt-2 text-right font-medium not-italic">
                    — {service.testimonial.author}
                  </footer>
                </blockquote>
              )}
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {service.faqs?.map((faq, index) => (
                  <div key={index} className="border-b border-primary-800 pb-4">
                    <h4 className="font-medium text-primary-100">{faq.question}</h4>
                    <p className="text-primary-300 mt-1">{faq.answer}</p>
                  </div>
                )) || (
                  <p className="text-primary-400">
                    No FAQs available. Please contact us for more information.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent-900/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-accent-100">
            Get in touch with us today to schedule a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Get Started
            </a>
            <a 
              href="mailto:info@roomeditors.com" 
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
