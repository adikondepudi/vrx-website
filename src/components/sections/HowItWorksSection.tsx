'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const HowItWorksCard = ({ num, title, description, imgSrc, imgAlt }: { num: string; title: string; description: string; imgSrc: string, imgAlt: string }) => (
  <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-8 md:p-16">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <span className="text-7xl font-bold text-blue-500/30">{num}</span>
        <h3 className="text-3xl md:text-4xl font-bold mt-2 text-white">{title}</h3>
        <p className="mt-4 text-gray-300 text-lg">{description}</p>
      </div>
      <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
         <Image src={imgSrc} alt={imgAlt} width={1200} height={783} className="rounded-md shadow-2xl" />
      </div>
    </div>
  </div>
);

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // -66.66% because we have 3 slides (100% / 3 slides = 33.33% per slide, and we want to move past 2 of them)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#1C1C1E] border-t border-gray-800">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <HowItWorksCard 
            num="01"
            title="The Assessment"
            description="The athlete performs a series of gamified, 15-minute tests in our VR environment. We capture baseline data when they're healthy and perform post-injury assessments for comparison."
            imgSrc="/images/ui/graph-raw.png"
            imgAlt="Raw data graph from VR assessment"
          />
          <HowItWorksCard 
            num="02"
            title="The AI Analysis"
            description="Our proprietary AI models analyze thousands of biomarkers, comparing post-injury performance to the athlete's own healthy baseline. The system detects subtle deviations missed by human observation."
            imgSrc="/images/product/headset-front.png" // Placeholder, should be a 'before/after' UI graphic
            imgAlt="AI analyzing data"
          />
          <HowItWorksCard 
            num="03"
            title="The Clinical Report"
            description="A clear, objective report is generated for medical staff. It provides a data-driven score for brain function, empowering confident and safe return-to-play decisions."
            imgSrc="/images/ui/dashboard-metrics.png"
            imgAlt="Clinical report dashboard"
          />
        </motion.div>
      </div>
    </section>
  );
}