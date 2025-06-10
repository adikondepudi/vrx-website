'use client';

import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/ui/TeamMemberCard';

const teamMembers = [
  { name: 'Dr. Anya Sharma', title: 'CEO & Neuroscientist', imageUrl: '/images/team/member_anya.jpg' },
  { name: 'Ben Carter', title: 'CTO & VR Architect', imageUrl: '/images/team/member_ben.jpg' },
  { name: 'Chloe Davis', title: 'Head of Clinical Trials', imageUrl: '/images/team/member_chloe.jpg' },
  { name: 'Marcus Chen', title: 'Lead AI Engineer', imageUrl: '/images/team/member_marcus.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1C1C1E] border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            The Minds Behind the Mission.
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Our multidisciplinary team of doctors, engineers, and data scientists is dedicated to revolutionizing athlete care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16"
        >
          {teamMembers.map((member) => (
            <motion.div variants={itemVariants} key={member.name}>
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}