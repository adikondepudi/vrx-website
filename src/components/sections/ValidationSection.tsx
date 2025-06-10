'use client';

import { motion } from 'framer-motion';

const validationPoints = [
  {
    title: "Clinically Validated",
    description: "Our assessment protocols are built on established neurological tests, refined through rigorous clinical trials and adapted for VR precision.",
    icon: "🏥",
    stats: "500+ clinical hours"
  },
  {
    title: "Peer-Reviewed Research", 
    description: "Core technology published in leading sports medicine and neuroscience journals, with ongoing research collaborations.",
    icon: "📊",
    stats: "3 published papers"
  },
  {
    title: "Expert Partnerships",
    description: "Developed with leading neurologists, athletic trainers, and professional sports organizations who trust our approach.",
    icon: "🤝",
    stats: "15+ medical partners"
  },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1] 
    }
  },
};

export default function ValidationSection() {
  return (
    <section className="section-padding bg-black border-t border-gray-800/50">
      <div className="container-premium text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-green-400 bg-green-500/10 backdrop-blur-md rounded-full border border-green-500/20">
              VALIDATION
            </span>
          </div>
          
          <h2 className="text-headline font-extralight text-white mb-8">
            Built on a Foundation of{' '}
            <span className="gradient-text font-light">Science</span>
            <span className="text-gray-500">.</span>
          </h2>
          
          <p className="text-body-large text-gray-400 max-w-4xl mx-auto leading-relaxed">
            VRx isn't just innovative—it's scientifically rigorous. 
            <span className="text-gray-200 font-normal"> We provide data you can trust when it matters most.</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {validationPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 lg:p-10 shadow-premium border border-gray-800/50 h-full transition-all duration-300 group-hover:border-primary-500/30 group-hover:shadow-glow">
                {/* Icon */}
                <div className="text-4xl mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  {point.icon}
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-auto">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4" />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {point.stats}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 lg:p-10 border border-gray-800/50">
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic leading-relaxed mb-4">
              "VRx represents a paradigm shift in concussion assessment. 
              <span className="text-white font-normal not-italic"> The level of precision and objectivity is unprecedented."</span>
            </blockquote>
            <cite className="block text-sm font-medium text-gray-500 not-italic">
              — Dr. Michael Rodriguez, Director of Sports Neurology, Stanford Medical
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}