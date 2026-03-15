'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useIsMobile } from '@/components/ui/use-mobile';

const faqs = [
  {
    question: '¿Cuándo conviene entrar en la fase de proyecto?',
    answer:
      'Cuanto antes exista una lectura clara del espacio, mejor. Un proyecto bien definido permite tomar decisiones con calma y asegura que cada detalle se alinee con la visión de lujo desde el principio.',
  },
  {
    question: '¿Trabajáis solo viviendas completas o también intervenciones parciales?',
    answer:
      'Trabajamos en ambas escalas. Lo esencial no es el tamaño, sino la oportunidad real de mejorar la experiencia espacial con criterio, elegancia y coherencia.',
  },
  {
    question: '¿Cómo se define el presupuesto?',
    answer:
      'Después de estudiar el alcance, fijar calidades, coordinar soluciones y ordenar fases. Preferimos una cifra sólida y realista a una aproximación rápida que luego no se sostenga.',
  },
  {
    question: '¿Acompañáis durante la ejecución del proyecto?',
    answer:
      'Si el encargo lo requiere, sí. Podemos acompañar la fase de desarrollo y obra para que el proyecto conserve su intención en cada decisión técnica, material y estética.',
  },
  {
    question: '¿Podéis coordinar materiales, iluminación y mobiliario fijo?',
    answer:
      'Sí. Entendemos el proyecto como un conjunto, así que la materialidad, la luz y las piezas integradas forman parte de la misma dirección espacial de lujo.',
  },
  {
    question: '¿Dónde realizáis proyectos?',
    answer:
      'Trabajamos principalmente en residencias exclusivas en España y Europa, aceptando proyectos selectos que requieran un enfoque personalizado y cuidado al detalle.',
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 18 : 28, filter: isMobile ? 'blur(0px)' : 'blur(8px)' },
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
    <section
      ref={sectionRef}
      id="faq"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ece1d4_0%,#e7dacc_48%,#efe5d9_100%)] pt-12 pb-18 md:pt-16 md:pb-22"
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >
        <div className="h-14 w-px bg-gradient-to-b from-accent/0 via-accent/35 to-accent/10" />
        <div className="mt-2 h-2.5 w-2.5 rounded-full border border-accent/40 bg-background shadow-[0_0_0_10px_rgba(181,142,97,0.05)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : {}}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-foreground" />
      </motion.div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 h-px w-[min(88vw,980px)] -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-accent/28 to-transparent"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-4xl px-5 md:px-6"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 text-balance font-serif text-[2.65rem] leading-[0.95] tracking-tight text-foreground md:text-[3.45rem]">
            Resuelve tus inquietudes
          </h2>
          <p className="mx-auto mt-5 max-w-[36rem] text-[1rem] leading-relaxed text-muted-foreground md:text-[1.05rem]">
            Todo lo importante para entender el proceso con claridad antes de pasar a la
            primera reunión.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 16 : 24, filter: isMobile ? 'blur(0px)' : 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-10"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="space-y-3 md:space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} variants={itemVariants}>
                <AccordionItem
                  value={`faq-${index}`}
                  className="rounded-[1.7rem] border border-border/60 bg-[rgba(255,255,255,0.82)] px-5 shadow-[0_20px_50px_rgba(20,20,20,0.04)] backdrop-blur-sm transition-[border-color,box-shadow,background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=open]:border-accent/28 data-[state=open]:bg-[rgba(255,255,255,0.96)] data-[state=open]:shadow-[0_28px_56px_rgba(20,20,20,0.07)] md:px-7"
                >
                  <AccordionTrigger className="group relative justify-center py-5 text-center font-serif text-[1.12rem] leading-[1.2] font-medium text-foreground hover:no-underline md:py-6 md:text-[1.42rem] md:leading-[1.16]">
                    <span className="relative mx-auto block w-full max-w-[40rem] px-4 text-center md:px-10">
                      <span className="block text-balance transition-colors duration-300 group-data-[state=open]:text-foreground">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-center text-[0.96rem] leading-relaxed text-muted-foreground md:pb-7 md:text-[1rem]">
                    <div className="mx-auto max-w-[38rem] border-t border-border/45 pt-4 md:pt-5">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
