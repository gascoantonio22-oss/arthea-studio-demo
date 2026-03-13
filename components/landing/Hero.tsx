'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useConsultationModal } from '@/components/hooks/useConsultationModal';
import { useSmoothScroll } from '@/components/hooks/useSmoothScroll';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { open } = useConsultationModal();
  const { scrollToSection } = useSmoothScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonFillVariants = {
    rest: {
      scale: 0,
      x: '35%',
      y: '-35%',
    },
    hover: {
      scale: 4.5,
      x: '0%',
      y: '0%',
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[88svh] items-start overflow-hidden pt-16 md:min-h-screen md:items-center md:pt-20"
      style={{ position: 'relative' }}
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/images/hero-architecture.jpg"
          alt="Arquitectura de lujo mediterranea"
          fill
          priority
          className="object-cover"
          style={{ filter: 'brightness(0.85) saturate(0.9) sepia(0.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/4 right-10 hidden h-64 w-64 rounded-full border border-accent/20 lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute right-1/4 bottom-1/4 hidden h-96 w-96 border border-foreground/10 lg:block"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 pt-22 pb-28 sm:pt-26 sm:pb-32 lg:px-8 lg:py-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          className="max-w-[20rem] sm:max-w-xl lg:max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <motion.div variants={lineVariants} className="h-px w-8 origin-left bg-accent sm:w-12" />
            <p className="text-[10px] uppercase tracking-[0.26em] text-accent sm:text-sm sm:tracking-[0.3em]">
              Clínica de Arquitectura
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-[15rem] text-balance font-serif text-[3.1rem] leading-[0.94] tracking-tight text-foreground sm:max-w-[18rem] sm:text-5xl md:max-w-none md:text-6xl lg:text-7xl"
          >
            Arquitectura que sana.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[19rem] text-pretty text-[0.98rem] leading-7 text-muted-foreground sm:mt-6 sm:max-w-xl sm:text-lg md:mt-8 md:text-xl"
          >
            <span className="sm:hidden">
              Exploramos cómo vives para crear refugios de luz, calma y armonía
              con una sensibilidad serena y muy cuidada.
            </span>
            <span className="hidden sm:inline">
              En Arthea Studio no solo diseñamos edificios; exploramos cómo
              vives y sueñas para crear refugios de luz, calma y armonía, ya
              sea en el corazón de la ciudad o frente al mar.
            </span>
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <motion.button
              type="button"
              onClick={open}
              className="group relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-sm bg-primary px-6 py-3.5 text-[0.95rem] text-primary-foreground sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              initial="rest"
              whileHover="hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Iniciar Diagnóstico
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </span>
              <motion.div
                variants={buttonFillVariants}
                className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-accent"
              />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => handleNavClick('#metodo')}
              className="group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-border px-6 py-3.5 text-[0.95rem] text-foreground sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 sm:hidden">Nuestro Método</span>
              <span className="relative z-10 hidden sm:inline">Descubrir Nuestro Método</span>
              <motion.div
                className="absolute inset-0 bg-muted/50"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <motion.span
          className="text-xs uppercase tracking-widest text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Descubrir
        </motion.span>
        <motion.button
          type="button"
          onClick={() => handleNavClick('#metodo')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="cursor-pointer p-2"
          aria-label="Desplazarse al metodo"
        >
          <ChevronDown size={24} className="text-foreground/50" />
        </motion.button>
      </motion.div>
    </section>
  );
}
