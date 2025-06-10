'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const componentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Advanced Eye-Tracking Sensors",
      description: "Captures thousands of micro-movements invisible to the naked eye"
    },
    {
      title: "Haptic Feedback & Reaction Monitoring",
      description: "Measures response time and motor coordination with millisecond precision"
    },
    {
      title: "Complete Neural Assessment",
      description: "Integrated system provides comprehensive neurological evaluation"
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=5000',
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.33) setCurrentStep(0);
            else if (progress < 0.66) setCurrentStep(1);
            else setCurrentStep(2);
          }
        },
      });

      // Initial state
      gsap.set(['#faceplate', '#controller-left', '#controller-right'], { 
        opacity: 0,
        scale: 0.8
      });
      gsap.set('#faceplate', { xPercent: 20, yPercent: -10 });
      gsap.set(['#controller-left', '#controller-right'], { yPercent: 20 });

      // Animation sequence
      tl.addLabel("start")
        .to('#headset-body', { 
          scale: 1.2, 
          duration: 2,
          ease: "power2.out"
        }, "start")
        
        .addLabel("faceplate-reveal", "+=0.5")
        .to('#faceplate', { 
          opacity: 1, 
          scale: 1,
          xPercent: -140, 
          yPercent: 15, 
          rotate: -12,
          duration: 2.5,
          ease: "power2.out"
        }, "faceplate-reveal")

        .addLabel("controllers-reveal", "+=1")
        .to(['#controller-left', '#controller-right'], { 
          opacity: 1, 
          scale: 1,
          yPercent: -60, 
          stagger: 0.3,
          duration: 2.5,
          ease: "power2.out"
        }, "controllers-reveal")
        .to('#controller-left', { 
          xPercent: -35, 
          rotate: 15,
          duration: 2,
          ease: "power2.out"
        }, "<")
        .to('#controller-right', { 
          xPercent: 35, 
          rotate: -15,
          duration: 2,
          ease: "power2.out" 
        }, "<")

        .addLabel("reassembly", "+=2")
        .to(['#faceplate', '#controller-left', '#controller-right'], { 
          opacity: 1, 
          xPercent: 0, 
          yPercent: 0, 
          rotate: 0,
          scale: 1,
          duration: 2.5,
          ease: "power2.out"
        }, "reassembly")
        .to('#headset-body', { 
          scale: 1, 
          duration: 2.5,
          ease: "power2.out"
        }, "reassembly");

    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="relative bg-black">
      {/* Header Content */}
      <div className="container-premium text-center pt-24 md:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-primary-400 bg-primary-500/10 backdrop-blur-md rounded-full border border-primary-500/20">
              THE SOLUTION
            </span>
          </div>
          
          <h2 className="text-headline font-extralight text-white mb-8">
            Precision through{' '}
            <span className="gradient-text font-light">Technology</span>
            <span className="text-gray-500">.</span>
          </h2>
          
          <p className="text-body-large text-gray-400 max-w-4xl mx-auto leading-relaxed">
            VRx captures thousands of objective data points—from micro-saccades to reaction time—that are invisible to the naked eye. 
            <span className="text-gray-200 font-normal"> This is the digital dissection of neurological function.</span>
          </p>
        </motion.div>
      </div>

      {/* Interactive Visualization */}
      <div ref={canvasRef} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative">
          {/* Main Headset */}
          <img 
            id="headset-body" 
            src="/images/product/headset-body.png" 
            alt="VRx Headset Body" 
            className="w-[400px] md:w-[500px] lg:w-[600px] z-10 relative shadow-glow" 
          />
          
          {/* Dissection Components */}
          <img 
            id="faceplate" 
            src="/images/product/faceplate.png" 
            alt="VRx Faceplate" 
            className="absolute top-0 left-0 w-[400px] md:w-[500px] lg:w-[600px] z-20" 
          />
          <img 
            id="controller-left" 
            src="/images/product/controller-left.png" 
            alt="VRx Left Controller" 
            className="absolute top-0 left-0 w-[400px] md:w-[500px] lg:w-[600px] z-20" 
          />
          <img 
            id="controller-right" 
            src="/images/product/controller-right.png" 
            alt="VRx Right Controller" 
            className="absolute top-0 left-0 w-[400px] md:w-[500px] lg:w-[600px] z-20" 
          />
        </div>

        {/* Dynamic Text Callouts */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center max-w-md"
        >
          <div className="glass-dark rounded-2xl p-6 shadow-premium">
            <h3 className="text-xl font-semibold text-white mb-2">
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {steps[currentStep].description}
            </p>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}