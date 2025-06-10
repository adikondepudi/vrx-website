'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Reduced parallax range to prevent overflow
  const backgroundX = useTransform(mouseX, [0, dimensions.width], [-15, 15]);
  const backgroundY = useTransform(mouseY, [0, dimensions.height], [-15, 15]);

  useEffect(() => {
    setMounted(true);
    
    // Set initial dimensions
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [mouseX, mouseY]);

  if (!mounted) {
    return (
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Fallback content for SSR */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-10" />
        <div className="relative z-20 text-center container-premium">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-300 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              INTRODUCING VRx
            </span>
          </div>
          <h1 className="text-display font-extralight text-white mb-8">
            A New Standard for{' '}
            <span className="gradient-text font-light">Brain Health</span>
            <span className="text-gray-400">.</span>
          </h1>
          <p className="text-body-large text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Objective, AI-powered neurological assessment for the athletes of today and tomorrow. 
            <span className="text-white font-normal"> The clarity of science, the elegance of technology.</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Video Background with Constrained Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ x: backgroundX, y: backgroundY }}
          className="absolute inset-[-5%] z-0"
        >
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
      </div>
      
      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center container-premium">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-gray-300 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            INTRODUCING VRx
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="text-display font-extralight text-white mb-8"
        >
          A New Standard for{' '}
          <span className="gradient-text font-light">Brain Health</span>
          <span className="text-gray-400">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          className="text-body-large text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Objective, AI-powered neurological assessment for the athletes of today and tomorrow. 
          <span className="text-white font-normal"> The clarity of science, the elegance of technology.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary shadow-premium"
          >
            See the Technology
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Download Research
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}