'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type TeamMemberCardProps = {
  name: string;
  title: string;
  imageUrl: string;
  expertise?: string;
};

export default function TeamMemberCard({ name, title, imageUrl, expertise }: TeamMemberCardProps) {
  return (
    <motion.div 
      className="group text-center"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Image Container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 overflow-hidden">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-premium border border-gray-800/50 group-hover:border-primary-500/30 transition-all duration-300">
          <Image
            src={imageUrl}
            alt={`Photo of ${name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 128px, 160px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-primary-400 font-medium text-xs tracking-wide">
            {title}
          </p>
        </div>

        {expertise && (
          <>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto" />
            <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
              {expertise}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}