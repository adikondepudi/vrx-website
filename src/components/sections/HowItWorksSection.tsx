'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ProcessCard = ({ 
  num, 
  title, 
  description, 
  imgSrc, 
  imgAlt,
  features 
}: { 
  num: string; 
  title: string; 
  description: string; 
  imgSrc: string;
  imgAlt: string;
  features: string[];
}) => (
  <div className="min-w-full h-full flex items-center justify-center px-8 md:px-16">
    <div className="container-premium grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl">
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="text-left"
      >
        <div className="mb-8">
          <span className="text-6xl md:text-7xl lg:text-8xl font-ultralight text-primary-500/20 block leading-none">
            {num}
          </span>
          <h3 className="text-2xl md:text-3xl font-light text-white mt-4 mb-6">
            {title}
          </h3>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            {description}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start text-sm text-gray-400"
            >
              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 flex-shrink-0 mt-1.5" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Visual */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="relative"
      >
        <div className="glass rounded-3xl p-6 md:p-8 shadow-premium border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50">
          <div className="relative overflow-hidden rounded-2xl">
            <Image 
              src={imgSrc} 
              alt={imgAlt} 
              width={800} 
              height={522} 
              className="w-full h-auto shadow-glow"
              priority={num === "01"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
        
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-accent rounded-full opacity-10 blur-2xl" />
      </motion.div>
    </div>
  </div>
);

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);

  const steps = [
    {
      num: "01",
      title: "The Assessment",
      description: "Athletes complete gamified, 15-minute tests in our immersive VR environment. We establish individual baselines when healthy and compare post-injury performance.",
      imgSrc: "/images/ui/graph-raw.png",
      imgAlt: "Raw assessment data visualization",
      features: [
        "15-minute comprehensive evaluation",
        "Gamified experience for consistent engagement",
        "Individual baseline establishment",
        "Multi-modal neurological testing"
      ]
    },
    {
      num: "02", 
      title: "The AI Analysis",
      description: "Our proprietary AI models analyze thousands of biomarkers, comparing post-injury performance to each athlete's healthy baseline with unprecedented precision.",
      imgSrc: "/images/product/headset-front.png",
      imgAlt: "AI analysis interface",
      features: [
        "Thousands of objective biomarkers analyzed",
        "Individual baseline comparison",
        "Subtle deviation detection",
        "Real-time processing capabilities"
      ]
    },
    {
      num: "03",
      title: "The Clinical Report", 
      description: "Clear, objective reports empower medical staff with data-driven insights, enabling confident and safe return-to-play decisions.",
      imgSrc: "/images/ui/dashboard-metrics.png",
      imgAlt: "Clinical dashboard interface",
      features: [
        "Objective recovery scoring",
        "Clear visual data presentation", 
        "Medical staff-friendly interface",
        "Evidence-based recommendations"
      ]
    }
  ];

  return (
    <section className="relative bg-gray-950 border-t border-gray-800/50">
      {/* Section Header - Not pinned */}
      <div className="container-premium py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-primary-400 bg-primary-500/10 backdrop-blur-md rounded-full border border-primary-500/20 mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-headline font-extralight text-white">
            Three Steps to{' '}
            <span className="gradient-text font-light">Certainty</span>
            <span className="text-gray-500">.</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div ref={containerRef} className="relative h-[200vh]">
        {/* Sticky wrapper for horizontal scroll */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[300%] h-full">
            {steps.map((step) => (
              <ProcessCard key={step.num} {...step} />
            ))}
          </motion.div>

          {/* Progress Indicator - Fixed to viewport */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="glass rounded-full px-6 py-3 shadow-premium">
              <div className="flex items-center space-x-4">
                {steps.map((_, index) => (
                  <div key={index} className="relative">
                    <div className="w-2 h-2 bg-gray-600 rounded-full" />
                    <motion.div
                      className="absolute inset-0 bg-primary-400 rounded-full"
                      style={{
                        scale: useTransform(
                          scrollYProgress,
                          [index / 3, (index + 1) / 3],
                          [0, 1]
                        ),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
