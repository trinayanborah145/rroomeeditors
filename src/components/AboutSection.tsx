import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 to-primary-900"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop" 
                  alt="Room Editors team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary-900 bg-primary-950 p-2">
                <div className="w-full h-full bg-primary-900 flex items-center justify-center">
                  <span className="text-accent-500 text-sm font-medium">Since 2022</span>
                </div>
              </div>
            </motion.div>
            
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
                Crafting Beautiful Spaces in <span className="text-accent-500">Assam</span>
              </h2>
              
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-lg text-primary-300 mb-6">
                  Room Editors is a professional interior design company based in Assam, founded in 2022 by Dimpu Baruah (popularly known as Dimpu Da) and Kingkar Choudhury and their talented team. Our vision is to turn your interior dreams into reality, combining innovative design with practical functionality.
                </p>
                <p className="text-lg text-primary-300 mb-8">
                  With a passion for creating beautiful and functional spaces, we take pride in our attention to detail and commitment to excellence in every project we undertake.
                </p>
              </div>
              
              {/* Founder's Note */}
              <div className="relative p-6 bg-primary-800/30 rounded-xl border-l-4 border-accent-500">
                <Quote className="absolute -top-4 left-6 w-8 h-8 text-accent-500/20" />
                <p className="text-lg italic text-primary-200 mb-4">
                  "Our mission is to bring your dream spaces to life with innovative designs and impeccable execution. Every project is a new opportunity to create something extraordinary."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 mr-3">
                    <span className="text-sm font-medium">DB</span>
                  </div>
                  <div>
                    <p className="font-medium">Dimpu Baruah & Kingkar Choudhury</p>
                    <p className="text-sm text-primary-400">Founder & Lead Designer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;