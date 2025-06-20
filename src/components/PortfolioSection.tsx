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
  
  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openProject(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/20 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-serif mb-2 transform transition-transform duration-300 group-hover:translate-y-0">{project.title}</h3>
                <p className="text-primary-300 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{project.category}</p>
              </div>
              {project.videoUrl && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 bg-accent-600 rounded-full">
                    <Play className="w-8 h-8" />
                  </div>
                </div>
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
                        muted={isMobile} // Mute on mobile by default due to autoplay restrictions
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                        onError={(e) => {
                          console.error('Video playback error:', e);
                          const target = e.target as HTMLVideoElement;
                          console.error('Video error details:', target.error);
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