'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline // Important for mobile browsers
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          A New Standard for Brain Health.
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto">
          Introducing VRx: Objective, AI-powered neurological assessment for the athletes of today and tomorrow.
        </p>
      </motion.div>
    </section>
  );
}