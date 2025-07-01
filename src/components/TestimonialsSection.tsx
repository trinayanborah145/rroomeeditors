import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  // New testimonials
  {
    id: 1,
    name: 'Priyam & Namrata Sharma',
    role: 'Young Couple, Guwahati',
    content: 'We just moved into our first home in Guwahati and had no clue where to start. The team made everything so easy. From colour choices to tiny decor details, they understood exactly what we wanted—even things we didn\'t know we wanted! Our living room has become everyone\'s favourite spot.',
    rating: 5,
    useInitial: true,
    emoji: '🏡'
  },
  {
    id: 2,
    name: 'Bikash Neog',
    role: 'Homeowner, Jorhat',
    content: 'I honestly thought interior design was just for big homes. But they totally changed my 2BHK flat in Jorhat. It feels spacious, peaceful, and like me. Even my relatives said, \'Eta hotelor moton lagise!\'',
    rating: 5,
    useInitial: true,
    emoji: '🪟'
  },
  {
    id: 3,
    name: 'Dr. Kaberi Dutta',
    role: 'Homeowner, Tezpur',
    content: 'I love nature and I wanted that feel inside my home too. They used bamboo, earthy colours, and local crafts in such a smart way. It feels warm and natural. Plus, they supported local artisans, which I really appreciated.',
    rating: 5,
    useInitial: true,
    emoji: '🪴'
  },
  {
    id: 4,
    name: 'Rituraj Hazarika',
    role: 'Founder, NorthEast Media Hub, Dibrugarh',
    content: 'We had an empty space and just a rough idea. They gave our office a full personality. Clients walk in and go "wow". Our team also feels more motivated now—it doesn\'t feel like just another boring office.',
    rating: 5,
    useInitial: true,
    emoji: '💼'
  },
  {
    id: 5,
    name: 'Manashree Paul',
    role: 'Homeowner, Silchar',
    content: 'We have a joint family, so everyone had different tastes. They somehow managed to mix it all and make the space look beautiful and balanced. My mother loved the kitchen, my son loved his room, and I finally got my cozy reading corner.',
    rating: 5,
    useInitial: true,
    emoji: '👪'
  },
  // Original testimonials
  {
    id: 6,
    name: 'Subhrangshu Sarma',
    role: 'Homeowner, Guwahati',
    content: 'Room Editors transformed our apartment into a dream home. Their attention to detail and creative solutions were beyond our expectations.',
    rating: 5,
    useInitial: true,
    emoji: '✨'
  },
  {
    id: 7,
    name: 'Priya Patel',
    role: 'Business Owner, Nagaon',
    content: 'The team delivered exceptional results for our office renovation. Professional, punctual, and highly skilled in space optimization.',
    rating: 5,
    useInitial: true,
    emoji: '🏢'
  },
  {
    id: 8,
    name: 'Arjun Das',
    role: 'Restaurateur, Jorhat',
    content: 'Our restaurant got a complete makeover with Room Editors. The design perfectly captures our brand identity and has improved customer experience.',
    rating: 5,
    useInitial: true,
    emoji: '🍽️'
  }
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const speed = isMobile ? 30 : 45; // Adjusted speeds for better mobile experience

  // Check for mobile view and update speed accordingly
  useEffect(() => {
    const updateSpeed = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    
    // Initial check
    updateSpeed();
    
    // Add debounced resize listener
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateSpeed, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Set up auto-scrolling animation with requestAnimationFrame for better performance
  useEffect(() => {
    if (!contentRef.current) return;
    
    const content = contentRef.current;
    const itemWidth = 320; // Slightly reduced for mobile
    const gap = 24; // Reduced gap for mobile
    const totalWidth = (itemWidth + gap) * testimonials.length;
    let animationFrame: number;
    let startTime: number | null = null;
    const duration = testimonials.length * 4000; // 4 seconds per testimonial
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      
      // Calculate the position with easing for smoother start/end
      const easeInOutCubic = (t: number) => t < 0.5 
        ? 4 * t * t * t 
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      const x = -easeInOutCubic(progress) * totalWidth;
      
      if (content) {
        content.style.transform = `translateX(${x}px)`;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrame = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [testimonials.length]);

  // Duplicate testimonials for seamless looping
  // We duplicate the testimonials to ensure smooth continuous scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
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
        
        <div 
          ref={containerRef}
          className="overflow-hidden py-8 relative px-4 md:px-0"
          style={{
            WebkitTapHighlightColor: 'transparent', // Remove tap highlight on mobile
            overflowX: 'hidden', // Prevent horizontal scrollbar
            touchAction: 'pan-y' // Better touch handling
          }}
        >
          <div 
            ref={contentRef}
            className="flex gap-4 sm:gap-6 md:gap-8 w-max"
            style={{
              padding: '0 16px', // Add some padding on the sides for mobile
              willChange: 'transform', // Optimize for animation
              userSelect: 'none' // Prevent text selection during swipe
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-auto bg-primary-800/50 rounded-xl p-6 md:p-8 relative flex-shrink-0 flex flex-col overflow-hidden"
                style={{
                  WebkitTransform: 'translateZ(0)', // Hardware acceleration
                  backfaceVisibility: 'hidden', // Improve performance
                  transform: 'translateZ(0)',
                  pointerEvents: 'auto' // Ensure all pointer events work normally
                }}
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-accent-500/20" />
                
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 text-2xl md:text-3xl mr-3 md:mr-4">
                    {testimonial.emoji}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-primary-300">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4 flex-1 overflow-y-auto pr-2 -mr-2">
                  {testimonial.content.split('. ').map((sentence, i, arr) => 
                    sentence && (
                      <p key={i} className="text-sm md:text-base text-primary-200 italic leading-relaxed">
                        {i === 0 ? '"' : ''}
                        {sentence.trim()}
                        {i === arr.length - 1 || (i === arr.length - 2 && !arr[arr.length - 1]) ? '"' : ''}
                        {i < arr.length - 1 && '. '}
                      </p>
                    )
                  )}
                </div>
                
                <div className="mt-4 flex-shrink-0">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient fade effect on the sides - only show on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-900 to-transparent pointer-events-none"></div>
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
