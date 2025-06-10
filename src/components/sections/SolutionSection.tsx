'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const componentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=4000', // Increased scroll duration for a smoother feel
        },
      });

      // Initial state setup (optional, but good practice)
      gsap.set(['#faceplate', '#controller-left', '#controller-right', '.callout-text'], { opacity: 0 });
      gsap.set('#faceplate', { xPercent: 20, scale: 0.95 });
      gsap.set(['#controller-left', '#controller-right'], { yPercent: 20, scale: 0.95 });

      // Animation sequence
      tl.addLabel("dissection-start")
        .to('#headset-body', { scale: 1.1, duration: 2 }, "dissection-start")
        .to('#faceplate', { opacity: 1, xPercent: -120, yPercent: 10, rotate: -15, duration: 2 }, "dissection-start")
        .to('#faceplate-text', { opacity: 1, duration: 1 }, "dissection-start+=1")

        .addLabel("controllers-out", "+=1")
        .to(['#controller-left', '#controller-right'], { opacity: 1, yPercent: -50, stagger: 0.2, duration: 2 }, "controllers-out")
        .to('#controller-left', { xPercent: -30, rotate: 10 }, "<")
        .to('#controller-right', { xPercent: 30, rotate: -10 }, "<")
        .to('#controllers-text', { opacity: 1, duration: 1 }, "controllers-out+=1")

        .addLabel("reassembly", "+=2")
        .to(['#faceplate-text', '#controllers-text'], { opacity: 0, duration: 1 }, "reassembly")
        .to(['#faceplate', '#controller-left', '#controller-right'], { 
          opacity: 1, xPercent: 0, yPercent: 0, rotate: 0, duration: 2 
        }, "reassembly")
        .to('#headset-body', { scale: 1, duration: 2 }, "reassembly");

    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="h-auto bg-[#111111]">
      <div className="container mx-auto px-4 max-w-5xl text-center pt-24 md:pt-32">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
          Precision through Technology.
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          VRx captures thousands of objective data points—from micro-saccades to reaction time—that are invisible to the naked eye. This is the digital dissection of neurological function.
        </p>
      </div>
      <div ref={canvasRef} className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden">
        {/* Base layer */}
        <img id="headset-body" src="/images/product/headset-body.png" alt="VRx Headset Body" className="absolute w-[400px] md:w-[500px] z-10" />
        
        {/* Dissection Layers */}
        <img id="faceplate" src="/images/product/faceplate.png" alt="VRx Faceplate" className="absolute w-[400px] md:w-[500px] z-20" />
        <img id="controller-left" src="/images/product/controller-left.png" alt="VRx Left Controller" className="absolute w-[400px] md:w-[500px] z-20" />
        <img id="controller-right" src="/images/product/controller-right.png" alt="VRx Right Controller" className="absolute w-[400px] md:w-[500px] z-20" />

        {/* Text Callouts */}
        <p id="faceplate-text" className="callout-text absolute text-white bg-black/50 p-2 rounded-md -translate-x-[120%] -translate-y-[40%] md:-translate-x-[150%] md:-translate-y-[50%]">
          Advanced Eye-Tracking Sensors
        </p>
        <p id="controllers-text" className="callout-text absolute text-white bg-black/50 p-2 rounded-md translate-y-[100%]">
          Haptic Feedback & Reaction Monitoring
        </p>
      </div>
    </section>
  );
}