import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Play, X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  const openProject = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProject = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedProject(null);
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
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
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
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-primary-950/90 backdrop-blur-md"
          >
            <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-primary-900 rounded-lg glass-card">
              {projects.filter(p => p.id === selectedProject).map(project => (
                <div key={project.id} className="relative">
                  <button 
                    className="absolute top-4 right-4 p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors z-10"
                    onClick={closeProject}
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-serif mb-2">{project.title}</h2>
                    <p className="text-primary-300 mb-6">{project.category}</p>
                    
                    {!isPlaying ? (
                      <div className="relative cursor-pointer group" onClick={() => setIsPlaying(true)}>
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-primary-950/50 group-hover:bg-primary-950/30 transition-colors">
                          <div className="p-6 bg-accent-600 rounded-full transform group-hover:scale-110 transition-transform">
                            <Play className="w-12 h-12" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full">
                        <video
                          ref={videoRef}
                          src={project.videoUrl}
                          autoPlay
                          controls
                          playsInline
                          className="w-full max-h-[70vh] object-contain rounded-lg"
                          onEnded={() => setIsPlaying(false)}
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    
                    <p className="text-primary-200 my-8">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.detailImages.map((img, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img 
                            src={img} 
                            alt={`${project.title} detail ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;