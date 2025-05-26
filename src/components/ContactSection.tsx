import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-primary-950 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary-900 to-primary-950"></div>
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">Get in Touch</h2>
          <p className="section-subheading mx-auto">
            Ready to transform your space? Reach out to discuss your project and schedule a consultation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="glass-card rounded-lg p-8 h-full">
              <h3 className="text-2xl font-serif font-medium mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-500/20 rounded-md text-accent-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300 mb-1">Phone / WhatsApp</p>
                    <a 
                      href="tel:6901598958" 
                      className="font-medium hover:text-accent-500 transition-colors"
                    >
                      +91 69015 98958
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-500/20 rounded-md text-accent-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300 mb-1">Email</p>
                    <a 
                      href="mailto:roomeditors1@gmail.com" 
                      className="font-medium hover:text-accent-500 transition-colors break-all"
                    >
                      roomeditors1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-500/20 rounded-md text-accent-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300 mb-1">Studio Address</p>
                    <a 
                      href="https://www.google.com/maps/place/Room+Editors/@26.4335413,91.4337202,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x375bcd189bbff6c9:0x4f07a1a5ae89cb86!2sCCMP%2BCG7,+Joy+Mangla,+Assam+781334!2m2!1d91.4362992!2d26.4335743!3m5!1s0x375bcd189bbff6c9:0x4f07a1a5ae89cb86!8m2!3d26.4335413!4d91.4362951!16s%2Fg%2F11tsrcwpyv?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-accent-500 transition-colors"
                    >
                      CCMP+CG7, Joy Mangla, Assam 781334
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Studio Hours</h4>
                <ul className="space-y-2 text-primary-200">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-lg p-8">
              <h3 className="text-2xl font-serif font-medium mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-200 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary-200 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="Residential Design">Residential Design</option>
                      <option value="Commercial Design">Commercial Design</option>
                      <option value="3D Visualization">3D Visualization</option>
                      <option value="Custom Furniture">Custom Furniture</option>
                      <option value="TV Unit Design">TV Unit Design</option>
                      <option value="Semi Modular Kitchen">Semi Modular Kitchen</option>
                      <option value="Full Modular Kitchen">Full Modular Kitchen</option>
                      <option value="Renovation Consultation">Renovation Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-200 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  {formStatus === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-green-500 mt-4"
                    >
                      Your message has been sent successfully! We'll get back to you soon.
                    </motion.p>
                  )}
                  
                  {formStatus === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-red-500 mt-4"
                    >
                      There was an error sending your message. Please try again.
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;