'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
    question: '¿Cómo se define el presupuesto con rigor?',
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
    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
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
      className="relative overflow-hidden bg-background pt-10 pb-20 md:pt-12 md:pb-24"
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
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-4xl px-5 md:px-6"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-balance font-serif text-[2.35rem] leading-[0.96] tracking-tight text-foreground md:text-[3.05rem]">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="mt-6 space-y-3 md:mt-8 md:space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} variants={itemVariants}>
              <AccordionItem
                value={`faq-${index}`}
                className="rounded-sm border border-border/60 bg-card/95 px-5 shadow-[0_14px_30px_rgba(20,20,20,0.03)] transition-[border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=open]:border-accent/30 data-[state=open]:bg-[rgba(255,255,255,0.98)] data-[state=open]:shadow-[0_22px_44px_rgba(20,20,20,0.05)] md:px-6"
              >
                <AccordionTrigger className="relative justify-center py-5 pr-9 text-center font-serif text-[1.18rem] leading-[1.18] font-medium text-foreground hover:no-underline md:py-6 md:pr-10 md:text-[1.55rem] md:leading-[1.14] [&>svg]:absolute [&>svg]:right-0 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2">
                  <span className="mx-auto block w-full max-w-[30rem] text-center">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="mx-auto max-w-[34rem] pb-5 text-center text-[0.98rem] leading-relaxed text-muted-foreground md:pb-6 md:text-[1.02rem]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
