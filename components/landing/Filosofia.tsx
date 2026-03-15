'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsMobile } from '@/components/ui/use-mobile';

const logos = [
  {
    name: 'Habitat',
    mark: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-5 w-auto md:h-6">
        <path d="M10 10h5v20H10zM20 10h15v5H20zM20 25h15v5H20zM20 17h10v5H20z" />
        <text x="45" y="28" className="text-[14px] font-bold uppercase tracking-wider">
          Habitat
        </text>
      </svg>
    ),
  },
  {
    name: 'Cima',
    mark: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-5 w-auto md:h-6">
        <path d="M10 25l5-15 5 15 5-15 5 15v5H10v-5z" />
        <text x="40" y="28" className="text-[14px] font-bold uppercase tracking-wider">
          Cima
        </text>
      </svg>
    ),
  },
  {
    name: 'Forma',
    mark: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-5 w-auto md:h-6">
        <circle cx="20" cy="20" r="10" stroke="currentColor" fill="none" strokeWidth="2" />
        <text x="40" y="28" className="text-[14px] font-bold uppercase tracking-wider">
          Forma
        </text>
      </svg>
    ),
  },
  {
    name: 'Nobel',
    mark: (
      <svg viewBox="0 0 160 40" fill="currentColor" className="h-5 w-auto md:h-6">
        <path d="M10 10l20 20M30 10L10 20" stroke="currentColor" strokeWidth="3" fill="none" />
        <text x="45" y="28" className="text-[14px] font-bold uppercase tracking-wider">
          Nobel
        </text>
      </svg>
    ),
  },
  {
    name: 'Altura',
    mark: (
      <svg viewBox="0 0 130 40" fill="currentColor" className="h-5 w-auto md:h-6">
        <path d="M10 30L25 10L40 30Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="50" y="28" className="text-[14px] font-bold uppercase tracking-wider">
          Altura
        </text>
      </svg>
    ),
  },
];

export function Filosofia() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const logosVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.72,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, filter: isMobile ? 'blur(0px)' : 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-border/50 bg-[linear-gradient(180deg,#f4ecdf_0%,#efe5d8_100%)] py-8 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-6">
        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="mx-auto mb-6 max-w-[20rem] text-center text-[0.78rem] font-semibold uppercase leading-[1.45] tracking-[0.2em] text-muted-foreground/60 md:mb-8 md:max-w-none md:text-[10px] md:tracking-[0.3em]"
        >
          Estudios, agencias y propietarios que buscan una ejecución impecable
        </motion.p>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={logosVariants}
          className="mx-auto grid max-w-sm grid-cols-2 justify-items-stretch gap-3 sm:max-w-xl sm:grid-cols-3 md:max-w-4xl md:grid-cols-5 md:gap-x-7 md:gap-y-5"
        >
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`${index === logos.length - 1 ? 'col-span-2 mx-auto w-full max-w-[8.5rem] sm:col-span-1 sm:max-w-none md:col-span-1 md:max-w-none' : ''} flex min-h-[4.2rem] items-center justify-center rounded-[1.1rem] border border-border/50 bg-background/55 px-4 py-3 text-foreground shadow-[0_10px_24px_rgba(20,20,20,0.03)] md:min-h-[3.3rem] md:rounded-full md:border md:border-border/35 md:bg-background/32 md:px-5 md:py-2.5 md:opacity-70 md:shadow-none md:transition-all md:duration-500 md:hover:border-accent/28 md:hover:bg-background/56 md:hover:opacity-100`}
            >
              <div className="text-foreground/75 transition-colors duration-500 md:text-foreground/70 md:hover:text-foreground">
                {logo.mark}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="mt-8 hidden flex-col items-center md:mt-10 md:flex"
        >
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="h-6 w-px origin-top bg-gradient-to-b from-accent/0 via-accent/40 to-accent/10 md:h-10"
          />
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 h-2.5 w-2.5 rounded-full border border-accent/40 bg-background shadow-[0_0_0_10px_rgba(181,142,97,0.05)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
