import { Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from './three/HeroCanvas';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-full w-full flex items-center justify-center">Loading 3D Experience...</div>}>
          <HeroCanvas />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950/50 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-24">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't just design spaces—
            <span className="text-gradient">we craft experiences</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-primary-200 mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Room Editors combines artistry with functionality to create spaces that inspire, comfort, and elevate your everyday life.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#portfolio" className="btn-primary">
              Explore Our Work
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-10 bg-white/50 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;