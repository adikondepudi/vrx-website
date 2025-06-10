'use client';

import { motion } from 'framer-motion';

const validationPoints = [
  {
    title: "Clinically Validated",
    description: "Our assessment protocols are based on established neurological tests, adapted for the precision of VR.",
  },
  {
    title: "Peer-Reviewed Research",
    description: "The core technology has been published in leading sports medicine and neuroscience journals.",
  },
  {
    title: "Trusted by Experts",
    description: "Developed in collaboration with neurologists, athletic trainers, and professional sports organizations.",
  },
];

export default function ValidationSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Built on a Foundation of Science.
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            VRx isn't just innovative; it's scientifically rigorous. We provide data you can trust when it matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {validationPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 bg-[#1C1C1E] rounded-lg border border-gray-800"
            >
              <h3 className="text-xl font-bold text-blue-400">{point.title}</h3>
              <p className="mt-4 text-gray-400">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}