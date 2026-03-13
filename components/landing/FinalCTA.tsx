'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useConsultationModal } from '@/components/hooks/useConsultationModal';

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const { open } = useConsultationModal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(181,142,97,0.18),transparent_18%),linear-gradient(180deg,#181518_0%,#101012_100%)] py-24 text-center text-primary-foreground md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >
        <div className="h-14 w-px bg-gradient-to-b from-accent/0 via-accent/45 to-accent/14" />
        <div className="mt-2 h-2.5 w-2.5 rounded-full border border-accent/45 bg-[#151315] shadow-[0_0_0_10px_rgba(181,142,97,0.05)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.1 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full border border-accent/10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent/90">
          Siguiente paso
        </p>
        <h2 className="text-balance font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl">
          Iniciar diagnóstico
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-[1.02rem] leading-relaxed text-primary-foreground/64 md:text-[1.08rem]">
          Si el proyecto merece una lectura rigurosa, la primera conversación es el punto
          donde todo empieza a ordenarse con claridad, criterio y dirección.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={open}
            className="group relative inline-flex min-w-[15.5rem] items-center justify-center gap-3 overflow-hidden rounded-full border border-accent/28 bg-[linear-gradient(180deg,rgba(255,252,248,0.1),rgba(255,252,248,0.04))] px-8 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-300 hover:border-accent/52 hover:text-primary-foreground"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          >
            <span className="relative z-10">Iniciar diagnóstico</span>
            <motion.span
              className="relative z-10"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 360, damping: 18 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,178,120,0.28),transparent_58%)] opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
