'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'El Diagnóstico',
    subtitle: 'Escuchar para comprender',
    description:
      'Analizamos las “patologías” de tu espacio: la luz que falta, el ruido que molesta, el desorden que pesa. Descubrimos lo que tu cuerpo y tu mente necesitan para sentirse en equilibrio.',
    image: '/images/diagnostico.jpg',
  },
  {
    number: '02',
    title: 'La Prescripción',
    subtitle: 'Diseño con intención',
    description:
      'Elegimos materiales que se sienten, luz que abraza, y una distribución que fluye naturalmente. Cada proyecto es un diseño de autor pensado como medicina para el caos cotidiano.',
    image: '/images/prescripcion.jpg',
  },
  {
    number: '03',
    title: 'La Sanación',
    subtitle: 'Ejecución impecable',
    description:
      'Construcción sin preocupaciones. Supervisamos cada detalle, desde permisos y licencias hasta que la última pieza de mármol y cada elemento de luz estén en su lugar, creando un refugio perfecto.',
    image: '/images/sanacion.jpg',
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-20%' });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const decorY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const isReversed = index % 2 === 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: isReversed ? 50 : -50,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      x: isReversed ? -50 : 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
    >
      <motion.div variants={imageVariants} className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
        <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              style={{ filter: 'saturate(0.9) sepia(0.05)' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
          />
        </div>

        <motion.div
          style={{ y: decorY }}
          className={`absolute -bottom-6 ${isReversed ? '-left-6' : '-right-6'} -z-10 h-32 w-32 rounded-sm border border-accent/30`}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className={`absolute -top-4 ${isReversed ? '-right-4' : '-left-4'} -z-10 hidden h-24 w-24 rounded-full bg-accent/10 lg:block`}
        />
      </motion.div>

      <motion.div variants={contentVariants} className={isReversed ? 'lg:order-1' : ''}>
        <motion.div variants={numberVariants} className="relative inline-block">
          <span className="font-serif text-8xl text-accent/10 select-none lg:text-9xl">
            {step.number}
          </span>
          <motion.div
            variants={lineVariants}
            className="absolute bottom-4 left-0 h-px w-full origin-left bg-accent/30"
          />
        </motion.div>

        <motion.p variants={contentVariants} className="mt-4 mb-2 text-sm uppercase tracking-[0.2em] text-accent">
          {step.subtitle}
        </motion.p>

        <motion.h3 variants={contentVariants} className="mb-6 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">
          {step.title}
        </motion.h3>

        <motion.p
          variants={contentVariants}
          className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {step.description}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '4rem' } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-px bg-accent/50"
        />
      </motion.div>
    </motion.div>
  );
}

export function LaExperiencia() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-10%' });

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
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

  return (
    <section ref={sectionRef} id="metodo" className="relative overflow-hidden bg-card py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute top-0 left-0 h-full w-full"
      >
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full border border-foreground" />
        <div className="absolute bottom-40 left-10 h-64 w-64 border border-foreground" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? 'visible' : 'hidden'}
          className="mb-16 text-center md:mb-24 lg:mb-32"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-12 origin-right bg-accent"
            />
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Nuestro Proceso</p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-12 origin-left bg-accent"
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-balance font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            El Método{' '}
            <span className="relative">
              Arthea
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isHeaderInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
                className="absolute -bottom-2 left-0 h-4 w-full overflow-visible"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 15 Q50 5 100 15 T200 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent/40"
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
          >
            Cada proyecto recibe el mismo rigor y atención que un diagnóstico
            médico: entendemos profundamente antes de proponer cualquier solución.
          </motion.p>
        </motion.div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
