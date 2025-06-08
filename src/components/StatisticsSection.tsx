import { motion, useInView } from 'framer-motion';
import { Check, Clock, Smile } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract the numeric value from the string (removing + or %)
  const target = parseInt(value.replace(/[^0-9]/g, ''));
  const duration = 2; // seconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration * 1000 / frameDuration);
  
  useEffect(() => {
    if (!isInView) return;
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(easeOutExpo(progress) * target);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(target);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [isInView, target, totalFrames]);
  
  // Easing function for smooth animation
  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };
  
  return (
    <span ref={ref}>
      {count.toLocaleString()}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
    </span>
  );
};

const stats = [
  {
    icon: <Check className="w-8 h-8 text-accent-500" />,
    value: '300+',
    label: 'Projects Completed'
  },
  {
    icon: <Clock className="w-8 h-8 text-accent-500" />,
    value: '4+',
    label: 'Years Experience'
  },
  {
    icon: <Smile className="w-8 h-8 text-accent-500" />,
    value: '98%',
    label: 'Client Satisfaction'
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-primary-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 glass-card rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-500/10 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-serif font-medium text-white mb-2">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="text-primary-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
