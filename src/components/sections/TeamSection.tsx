'use client';

import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/ui/TeamMemberCard';

const teamMembers = [
  { 
    name: 'Dr. Jonathan Browne', 
    title: 'Chief Medical Officer', 
    imageUrl: '/images/team/member_jonathan.jpg',
    expertise: 'Neurology & Sports Medicine'
  },
  { 
    name: 'Adi Kondepudi', 
    title: 'CEO & Technical Co-Lead', 
    imageUrl: '/images/team/member_adi.jpg',
    expertise: 'Data Science & Product'
  },
  { 
    name: 'Betania Arce', 
    title: 'Clinical Co-Lead', 
    imageUrl: '/images/team/member_betania.jpg',
    expertise: 'Clinical Validation'
  },
  { 
    name: 'Dev Lalwani', 
    title: 'Technical Co-Lead', 
    imageUrl: '/images/team/member_dev.jpg',
    expertise: 'VR Engineering'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1] 
    }
  },
};

export default function TeamSection() {
  return (
    <section className="section-padding bg-gray-950 border-t border-gray-800/50">
      <div className="container-premium text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-accent-400 bg-accent-500/10 backdrop-blur-md rounded-full border border-accent-500/20">
              THE TEAM
            </span>
          </div>
          
          <h2 className="text-headline font-extralight text-white mb-8">
            The Minds Behind the{' '}
            <span className="gradient-accent-text font-light">Mission</span>
            <span className="text-gray-500">.</span>
          </h2>
          
          <p className="text-body-large text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Our multidisciplinary team of physicians, engineers, and data scientists is dedicated to revolutionizing athlete care. 
            <span className="text-gray-200 font-normal"> From Johns Hopkins to the field.</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {teamMembers.map((member) => (
            <motion.div variants={itemVariants} key={member.name}>
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass rounded-2xl p-8 lg:p-10 border border-gray-800/50 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <span className="text-white font-semibold">Johns Hopkins University</span> — 
              Where breakthrough medical technology meets rigorous academic research.
            </p>
            <p className="text-sm text-gray-500">
              Our team combines decades of clinical experience with cutting-edge technical expertise, 
              all united by a mission to protect athletes through objective, data-driven assessment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}