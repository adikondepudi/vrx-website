'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProcessCard = ({
  num,
  title,
  description,
  imgSrc,
  imgAlt,
  features,
  isFirst,
}: {
  num: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  features: string[];
  isFirst: boolean;
}) => (
  // Each card is now a self-contained grid layout within the vertical flow
  <div className="container-premium grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl">
    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
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
      viewport={{ once: true, margin: '-100px' }}
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
            priority={isFirst}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-accent rounded-full opacity-10 blur-2xl" />
    </motion.div>
  </div>
);

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'The Assessment',
      description:
        "Athletes complete gamified, 15-minute tests in our immersive VR environment. We establish individual baselines when healthy and compare post-injury performance.",
      imgSrc: '/images/ui/graph-raw.png',
      imgAlt: 'Raw assessment data visualization',
      features: [
        '15-minute comprehensive evaluation',
        'Gamified experience for consistent engagement',
        'Individual baseline establishment',
        'Multi-modal neurological testing',
      ],
    },
    {
      num: '02',
      title: 'The AI Analysis',
      description:
        "Our proprietary AI models analyze thousands of biomarkers, comparing post-injury performance to each athlete's healthy baseline with unprecedented precision.",
      imgSrc: '/images/product/headset-front.png',
      imgAlt: 'AI analysis interface',
      features: [
        'Thousands of objective biomarkers analyzed',
        'Individual baseline comparison',
        'Subtle deviation detection',
        'Real-time processing capabilities',
      ],
    },
    {
      num: '03',
      title: 'The Clinical Report',
      description:
        'Clear, objective reports empower medical staff with data-driven insights, enabling confident and safe return-to-play decisions.',
      imgSrc: '/images/ui/dashboard-metrics.png',
      imgAlt: 'Clinical dashboard interface',
      features: [
        'Objective recovery scoring',
        'Clear visual data presentation',
        'Medical staff-friendly interface',
        'Evidence-based recommendations',
      ],
    },
  ];

  return (
    <section className="section-padding bg-gray-950 border-t border-gray-800/50">
      {/* Section Header */}
      <div className="container-premium text-center mb-24">
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

      {/* Vertical container for the process cards */}
      <div className="flex flex-col gap-y-24 md:gap-y-32">
        {steps.map((step, index) => (
          <ProcessCard key={step.num} {...step} isFirst={index === 0} />
        ))}
      </div>
    </section>
  );
}