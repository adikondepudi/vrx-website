'use client';

import { motion } from 'framer-motion';
import StatCounter from '@/components/ui/StatCounter';

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1C1C1E] border-y border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            The Guesswork in Return-to-Play.
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Current concussion protocols rely on subjective self-reporting, leaving athletes vulnerable. Misjudging recovery can lead to severe, long-term consequences. We're replacing ambiguity with data-driven certainty.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-16">
          <StatCounter targetNumber={214000} label="Athletic TBIs Annually (US)" />
          <StatCounter targetNumber={43.5} label="Report Recurring Symptoms" suffix="%" decimals={1} />
          <StatCounter targetNumber={87000} label="Average Lifetime Cost Per TBI" prefix="$" />
        </div>
      </div>
    </section>
  );
}