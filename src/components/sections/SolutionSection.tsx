'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: "Advanced Eye-Tracking Sensors",
    description: "Captures thousands of micro-movements invisible to the naked eye",
    image: "/images/product/faceplate.png"
  },
  {
    title: "Haptic Feedback & Reaction Monitoring",
    description: "Measures response time and motor coordination with millisecond precision",
    image: "/images/product/controller-right.png"
  },
  {
    title: "Complete Neural Assessment",
    description: "Integrated system provides comprehensive neurological evaluation",
    image: "/images/product/headset-body.png"
  }
];

export default function SolutionSection() {
  return (
    <section className="section-padding bg-black border-t border-gray-800/50">
      <div className="container-premium text-center">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-primary-400 bg-primary-500/10 backdrop-blur-md rounded-full border border-primary-500/20">
              THE SOLUTION
            </span>
          </div>
          
          <h2 className="text-headline font-extralight text-white mb-8">
            Precision through{' '}
            <span className="gradient-text font-light">Technology</span>
            <span className="text-gray-500">.</span>
          </h2>
          
          <p className="text-body-large text-gray-400 max-w-4xl mx-auto leading-relaxed">
            VRx captures thousands of objective data points—from micro-saccades to reaction time—that are invisible to the naked eye.
            <span className="text-gray-200 font-normal"> This is the digital dissection of neurological function.</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-8 h-48 flex items-center justify-center">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="max-h-full w-auto"
                />
              </div>
              <div className="glass-dark rounded-2xl p-6 shadow-premium w-full">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}