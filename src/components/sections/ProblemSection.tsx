'use client';

import { motion } from 'framer-motion';
import StatCounter from '@/components/ui/StatCounter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1] 
    }
  },
};

export default function ProblemSection() {
  return (
    <section className="section-padding bg-gray-950 border-t border-gray-800/50">
      <div className="container-premium text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <motion.div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-red-400 bg-red-500/10 backdrop-blur-md rounded-full border border-red-500/20">
                THE PROBLEM
              </span>
            </motion.div>
            
            <h2 className="text-headline font-extralight text-white mb-8">
              The Guesswork in{' '}
              <span className="gradient-accent-text font-light">Return-to-Play</span>
              <span className="text-gray-500">.</span>
            </h2>
            
            <p className="text-body-large text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Current concussion protocols rely on subjective self-reporting, leaving athletes vulnerable. 
              <span className="text-gray-200 font-normal"> Misjudging recovery can lead to severe, long-term consequences.</span>
              {' '}We're replacing ambiguity with data-driven certainty.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            <div className="glass rounded-2xl p-8 lg:p-10 shadow-premium border border-gray-800/50">
              <StatCounter 
                targetNumber={214000} 
                label="Athletic TBIs Annually (US)" 
                accentColor="text-red-400"
              />
            </div>
            
            <div className="glass rounded-2xl p-8 lg:p-10 shadow-premium border border-gray-800/50">
              <StatCounter 
                targetNumber={43.5} 
                label="Report Recurring Symptoms" 
                suffix="%" 
                decimals={1}
                accentColor="text-orange-400"
              />
            </div>
            
            <div className="glass rounded-2xl p-8 lg:p-10 shadow-premium border border-gray-800/50">
              <StatCounter 
                targetNumber={87000} 
                label="Average Lifetime Cost Per TBI" 
                prefix="$" 
                accentColor="text-yellow-400"
              />
            </div>
          </motion.div>

          {/* Supporting Quote */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 max-w-3xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic leading-relaxed">
              "The current standard of care leaves too much to chance. 
              <span className="text-white font-normal not-italic"> Athletes deserve objective, reliable assessment."</span>
            </blockquote>
            <cite className="block mt-4 text-sm font-medium text-gray-500 not-italic">
              — Dr. Sarah Chen, Sports Neurologist
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}