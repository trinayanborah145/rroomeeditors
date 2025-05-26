import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Homeowner, Guwahati',
    content: 'Room Editors transformed our apartment into a dream home. Their attention to detail and creative solutions were beyond our expectations.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Business Owner, Nagaon',
    content: 'The team delivered exceptional results for our office renovation. Professional, punctual, and highly skilled in space optimization.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Arjun Das',
    role: 'Restaurateur, Jorhat',
    content: 'Our restaurant got a complete makeover with Room Editors. The design perfectly captures our brand identity and has improved customer experience.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">What Our Clients Say</h2>
          <p className="section-subheading mx-auto">
            Hear from our satisfied clients about their experience working with Room Editors.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-primary-800/50 rounded-xl p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent-500/20" />
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-primary-300">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-primary-200 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="flex">
                {renderStars(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
