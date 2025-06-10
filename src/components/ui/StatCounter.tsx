'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type StatCounterProps = {
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
  accentColor?: string;
};

export default function StatCounter({ 
  targetNumber, 
  prefix = '', 
  suffix = '', 
  label = '', 
  decimals = 0,
  accentColor = 'text-primary-400'
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      
      const controls = animate(0, targetNumber, {
        duration: 2.5,
        ease: [0.76, 0, 0.24, 1],
        onUpdate(value) {
          const formattedValue = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          node.textContent = prefix + formattedValue + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, targetNumber, prefix, suffix, decimals]);

  return (
    <div className="text-center group">
      {/* Number Display */}
      <div className="mb-4">
        <span 
          ref={ref} 
          className={`text-5xl md:text-6xl font-extralight tracking-tight ${accentColor} block transition-all duration-300 group-hover:scale-105`}
        >
          0
        </span>
      </div>

      {/* Label */}
      <div className="space-y-2">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto" />
        <p className="text-sm md:text-base font-medium text-gray-400 leading-relaxed tracking-wide max-w-48 mx-auto">
          {label}
        </p>
      </div>

      {/* Subtle glow effect on hover */}
      <div className={`absolute inset-0 ${accentColor.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
    </div>
  );
}