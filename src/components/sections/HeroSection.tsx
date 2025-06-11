'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image or Color */}
      <div className="absolute inset-0 bg-black" />
      
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
      </div>
    </section>
  );
}