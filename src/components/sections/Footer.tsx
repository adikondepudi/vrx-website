'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="section-padding-small bg-black border-t border-gray-800/50">
      <div className="container-premium">
        {/* Main CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-primary-400 bg-primary-500/10 backdrop-blur-md rounded-full border border-primary-500/20 mb-6">
              GET STARTED
            </span>
            
            <h3 className="text-headline font-extralight text-white mb-6">
              Connect with{' '}
              <span className="gradient-text font-light">VRx</span>
              <span className="text-gray-500">.</span>
            </h3>
            
            <p className="text-body-large text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring a new standard of care to your organization? 
              <span className="text-gray-200 font-normal"> Let's discuss how VRx can protect your athletes.</span>
            </p>
          </div>

          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              href="mailto:contact@vrx.health"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary shadow-premium"
            >
              Schedule a Demo
            </motion.a>
            
            <motion.a
              href="/vrx-research-overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Download Research
            </motion.a>
          </div>

          {/* Contact Information */}
          <div className="glass rounded-2xl p-6 max-w-md mx-auto border border-gray-800/50">
            <p className="text-sm text-gray-400 mb-2">Direct Contact</p>
            <a
              href="mailto:contact@vrx.health"
              className="text-lg text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
            >
              contact@vrx.health
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12" />

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0"
        >
          {/* Brand */}
          <div>
            <h4 className="text-2xl font-light text-white mb-1">
              VR<span className="gradient-text">x</span>
            </h4>
            <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
              The Future of Brain Health
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 text-sm">
            <a 
              href="/privacy" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="/research" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              Research
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500">
            <p>© {new Date().getFullYear()} VRx Technologies Inc.</p>
            <p className="mt-1">Built at Johns Hopkins University</p>
          </div>
        </motion.div>

        {/* Subtle bottom accent */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-primary rounded-full opacity-30" />
        </div>
      </div>
    </footer>
  );
}