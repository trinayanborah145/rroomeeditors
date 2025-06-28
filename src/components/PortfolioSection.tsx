import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Play, X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Check if device is mobile and handle mobile-specific animations
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    
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
  }, []);
  
  const categories = useMemo(() => 
    ['All', ...new Set(projects.map(project => project.category))],
    [projects]
  );
  
  const filteredProjects = useMemo(() => 
    activeCategory === 'All' 
      ? projects 
      : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects]
  );
  
  const selectedProject = useMemo(
    () => projects.find(p => p.id === selectedProjectId) || null,
    [selectedProjectId]
  );
    
  const openProject = (id: number) => {
    setSelectedProjectId(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProject = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedProjectId(null);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="portfolio" className="py-24 bg-primary-950 relative">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary-900 to-primary-950"></div>
      
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
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-accent-600 text-white' 
                  : 'bg-primary-800 hover:bg-primary-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.4,
                  delay: isMobile ? index * 0.05 : 0,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
              whileHover={!isMobile ? { 
                y: -5,
                transition: { duration: 0.2 }
              } : {}}
              whileTap={{ 
                scale: isMobile ? 0.98 : 1,
                transition: { duration: 0.1 }
              }}
              className="group relative overflow-hidden rounded-xl md:rounded-lg cursor-pointer shadow-lg md:shadow-none hover:shadow-xl transition-all duration-300"
              onClick={() => openProject(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent opacity-70 md:opacity-50 transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <motion.h3 
                  className="text-lg md:text-xl font-serif font-medium mb-1 md:mb-2"
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
                >
                  <div className="p-3 md:p-4 bg-accent-600/90 hover:bg-accent-500 rounded-full transition-colors">
                    <Play className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </motion.div>
              )}
            </motion.div>
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
          >
            <div 
              className="relative w-full max-w-4xl max-h-[90vh] bg-primary-900 rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 text-white hover:text-primary-400 transition-colors"
                onClick={closeProject}
              >
                <X size={24} />
              </button>
              
              <div className="relative bg-black flex justify-center p-4">
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
                    <p className="text-white/70">No video available</p>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-primary-300 mb-4">
                  {selectedProject.category}
                </p>
                <p className="text-white/80 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
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