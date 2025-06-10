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
      <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 overflow-hidden">
        {/* Main Image */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-premium border border-gray-800/50 group-hover:border-primary-500/30 transition-all duration-300">
          <Image
            src={imageUrl}
            alt={`Photo of ${name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 160px, 192px"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Floating accent */}
        <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-accent rounded-full opacity-0 group-hover:opacity-15 blur-lg transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-primary-400 font-medium text-sm tracking-wide">
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

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-primary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
    </motion.div>
  );
}