'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  animated?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = '',
  animated = true,
}: SectionWrapperProps) {
  const content = (
    <div
      id={id}
      className={`mx-auto w-full max-w-section px-section-mobile md:px-section-tablet lg:px-section-desktop py-[3.5rem] md:py-[4.75rem] lg:py-[5.75rem] ${className}`}
    >
      {children}
    </div>
  );

  if (!animated) {
    return content;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {content}
    </motion.section>
  );
}
