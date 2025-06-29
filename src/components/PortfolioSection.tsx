import { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { Play, X } from 'lucide-react';

// Animation variants for better performance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = (index: number, isMobile: boolean): Variants => ({
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: isMobile ? index * 0.05 : 0,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
});

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Memoized function to check if device is mobile
  const checkIfMobile = useCallback(() => {
    const isMobileView = window.innerWidth < 768;
    setIsMobile(isMobileView);
  }, []);

  // Check if device is mobile and handle mobile-specific animations
  useEffect(() => {
    checkIfMobile();
    
    // Debounce resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkIfMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [checkIfMobile]);
  
  // Memoize categories to prevent recalculation on every render
  const categories = useMemo<string[]>(() => 
    ['All', ...new Set(projects.map(project => project.category))],
    []
  );
  
  // Memoize filtered projects based on active category
  const filteredProjects = useMemo<Project[]>(() => 
    activeCategory === 'All' 
      ? projects 
      : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );
  
  // Memoize selected project to prevent unnecessary lookups
  const selectedProject = useMemo<Project | null>(
    () => projects.find(p => p.id === selectedProjectId) || null,
    [selectedProjectId]
  );
    
  // Handle opening a project in the modal
  const openProject = useCallback((id: number) => {
    setSelectedProjectId(id);
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    // Add event listener for keyboard navigation
    document.addEventListener('keydown', handleKeyDown);
  }, []);
  
  // Handle closing the project modal
  const closeProject = useCallback(() => {
    // Pause and reset video if it exists
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedProjectId(null);
    setIsPlaying(false);
    // Restore body scroll
    document.body.style.overflow = 'auto';
    // Remove keyboard event listener
    document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle keyboard navigation for accessibility
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeProject();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (!selectedProjectId) return;
      
      const currentIndex = projects.findIndex(p => p.id === selectedProjectId);
      if (currentIndex === -1) return;
      
      let nextIndex;
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % projects.length;
      } else {
        nextIndex = (currentIndex - 1 + projects.length) % projects.length;
      }
      
      setSelectedProjectId(projects[nextIndex].id);
      // Focus the modal content for better accessibility
      const modal = document.getElementById('project-modal-content');
      if (modal) {
        modal.focus();
      }
    }
  }, [selectedProjectId, closeProject]);
  
  return (
    <section 
      id="portfolio" 
      className="py-24 bg-primary-950 relative"
      aria-label="Our Portfolio"
    >
      <div 
        className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary-900 to-primary-950"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">Our Portfolio</h2>
          <p className="section-subheading mx-auto">
            Explore our carefully curated collection of transformative interior design projects.
          </p>
        </motion.div>
        
        <div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${category.toLowerCase().replace(/\s+/g, '-')}-tab`}
                id={`${category.toLowerCase().replace(/\s+/g, '-')}-tab`}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-accent-600 text-white' 
                    : 'bg-primary-800 hover:bg-primary-700'
                }`}
                onClick={() => setActiveCategory(category)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCategory(category);
                  }
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          layout
          role="list"
          aria-label="List of projects"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              variants={itemVariants(index, isMobile)}
              whileHover={!isMobile ? { 
                y: -5,
                transition: { duration: 0.2 }
              } : {}}
              whileTap={{ 
                scale: isMobile ? 0.98 : 1,
                transition: { duration: 0.1 }
              }}
              className="group relative overflow-hidden rounded-xl md:rounded-lg cursor-pointer shadow-lg md:shadow-none hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-accent-500 focus-within:ring-offset-4 focus-within:ring-offset-primary-950"
              onClick={() => openProject(project.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(project.id);
                }
              }}
              role="listitem"
              aria-labelledby={`project-${project.id}-title`}
              tabIndex={0}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt="" // Empty alt because we have a visible title below
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  loading="lazy"
                  width={400}
                  height={300}
                  decoding="async"
                />
              </div>
              <div 
                className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent opacity-70 md:opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                aria-hidden="true"
              ></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <motion.h3 
                  id={`project-${project.id}-title`}
                  className="text-lg md:text-xl font-serif font-medium mb-1 md:mb-2 text-white"
                  initial={{ y: 0, opacity: 1 }}
                  animate={isMobile ? { y: 0, opacity: 1 } : { y: 10, opacity: 1 }}
                  whileHover={!isMobile ? { y: 0 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-primary-200 text-xs md:text-sm font-light"
                  initial={{ y: 10, opacity: 0 }}
                  animate={isMobile ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  whileHover={!isMobile ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  aria-label={`Category: ${project.category}`}
                >
                  {project.category}
                </motion.p>
              </div>
              {project.videoUrl && (
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isMobile ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  whileHover={!isMobile ? { opacity: 1, scale: 1.1 } : {}}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  aria-hidden="true"
                >
                  <div 
                    className="p-3 md:p-4 bg-accent-600/90 hover:bg-accent-500 rounded-full transition-colors"
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
          >
            <div 
              id="project-modal-content"
              className="relative w-full max-w-4xl max-h-[90vh] bg-primary-900 rounded-lg overflow-hidden focus:outline-none"
              onClick={e => e.stopPropagation()}
              tabIndex={-1}
            >
              <button 
                className="absolute top-4 right-4 z-10 text-white hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-full p-1"
                onClick={closeProject}
                aria-label="Close project details"
              >
                <X size={24} aria-hidden="true" />
              </button>
              
              <div className="relative bg-black flex justify-center p-4" id="project-modal-description">
                {selectedProject.videoUrl ? (
                  <div className="relative w-full max-w-4xl">
                    <div className="relative pt-[56.25%] w-full">
                      <video
                        ref={videoRef}
                        src={selectedProject.videoUrl}
                        className="absolute inset-0 w-full h-full object-contain"
                        controls
                        autoPlay
                        playsInline
                        preload="auto"
                        muted={isMobile} // Mute on mobile by default due to autoplay restrictions
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                        onError={(e) => {
                          console.error('Video playback error:', e);
                          const target = e.target as HTMLVideoElement;
                          console.error('Video error details:', target.error);
                          // Try to force play if autoplay was prevented
                          if (videoRef.current) {
                            videoRef.current.play().catch(err => {
                              console.error('Error attempting to play video:', err);
                            });
                          }
                        }}
                        onCanPlayThrough={() => {
                          // Ensure video plays when it's ready
                          if (videoRef.current && !isPlaying) {
                            videoRef.current.play().catch(err => {
                              console.error('Autoplay was prevented:', err);
                            });
                          }
                        }}
                      />
                      {!isPlaying && (
                        <button 
                          className="absolute inset-0 flex items-center justify-center group"
                          onClick={() => videoRef.current?.play()}
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-500/80 rounded-full flex items-center justify-center group-hover:bg-primary-400/90 transition-colors">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-64 bg-primary-800">
                  <p className="text-white/70" aria-hidden="true">No video available</p>
                </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 id="project-modal-title" className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-primary-300 mb-2" aria-label="Project category">
                  {selectedProject.category}
                </p>
                <p className="text-white/80 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary-800 text-primary-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;