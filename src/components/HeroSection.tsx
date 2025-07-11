import { Suspense, useMemo, lazy, useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, Variants, useInView } from 'framer-motion';

// Lazy load the 3D canvas component
const LazyHeroCanvas = lazy(() => import('./three/HeroCanvas'));

const HeroCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Only load on client-side after mount
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <Suspense fallback={null}>
      <LazyHeroCanvas />
    </Suspense>
  );
};

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // Memoize animation variants to prevent unnecessary recalculations
  const containerVariants: Variants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20,
      willChange: 'transform, opacity'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // Use tween for better performance on mobile
        type: 'tween',
        ease: 'easeOut'
      },
      willChange: 'auto'
    }
  }), [prefersReducedMotion]);
  
  // Only animate if in viewport
  const controlsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(controlsRef, { once: true });

  return (
    <section 
      id="hero" 
      ref={controlsRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        // Force GPU acceleration
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Background with image and overlay */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Flux_Dev_A_luxurious_and_modern_interior_design_scene_showing__2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950/50 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-24">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight"
            variants={itemVariants}
          >
            We don't just design spaces—
            <span className="text-gradient">we craft experiences</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-primary-200 mt-6 max-w-2xl"
            variants={itemVariants}
          >
            Room Editors combines artistry with functionality to create spaces that inspire, comfort, and elevate your everyday life.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <a href="#portfolio" className="btn-primary">
              Explore Our Work
            </a>
            <a 
              href="https://wa.me/916901598958?text=I've%20came%20from%20your%20website%20and%20I%20want%20to%20get%20a%20quote" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Get a Quote
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - only show if reduced motion is not preferred */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-transform"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              delay: 1.2, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-px h-10 bg-white/50 animate-pulse"></div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;