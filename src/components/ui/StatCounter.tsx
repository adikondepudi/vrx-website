'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type StatCounterProps = {
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
};

export default function StatCounter({ 
  targetNumber, 
  prefix = '', 
  suffix = '', 
  label = '', 
  decimals = 0 
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      
      const controls = animate(0, targetNumber, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = prefix + value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, targetNumber, prefix, suffix, decimals]);

  return (
    <div className="flex flex-col items-center">
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-blue-400">0</span>
      <p className="mt-2 text-gray-400 font-light text-center">{label}</p>
    </div>
  );
}