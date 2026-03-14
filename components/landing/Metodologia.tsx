'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Lo que más valoramos fue la claridad con la que el estudio interpretó nuestro estilo de vida. Cada espacio se diseñó con precisión, y el resultado transmite lujo, armonía y personalidad desde el primer instante.',
    name: 'Victoria Ashford',
    detail: 'Propietaria, Madrid',
  },
  {
    quote:
      'Cuando una villa está bien concebida, se nota en cada detalle. La proporción, la luz y la serenidad del conjunto transformaron por completo nuestra experiencia de habitarla.',
    name: 'Marcos Chen',
    detail: 'Cliente, Barcelona',
  },
  {
    quote:
      'La consistencia entre concepto, diseño y ejecución fue decisiva. Cada elección refleja criterio espacial y estética de lujo, no solo una solución técnica.',
    name: 'David Torres',
    detail: 'Cliente, Marbella',
  },
];

function EditorialCard({
  quote,
  name,
  detail,
  featured = false,
}: {
  quote: string;
  name: string;
  detail: string;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="flex h-full min-h-[34rem] flex-col justify-between rounded-[2.2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,242,234,0.92))] p-10 shadow-[0_28px_70px_rgba(30,22,16,0.06)] ring-1 ring-white/40 md:p-12">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent/85">
            Testimonio destacado
          </p>
          <div className="mt-8 max-w-3xl">
            <span
              aria-hidden="true"
              className="font-serif text-6xl leading-none text-accent/55 md:text-7xl"
            >
              "
            </span>
            <p className="mt-3 font-serif text-[1.9rem] leading-[1.18] tracking-tight text-foreground md:text-[2.6rem]">
              {quote}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">{name}</p>
          <p className="mt-2 text-[0.82rem] uppercase tracking-[0.18em] text-muted-foreground">
            {detail}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-border/70 bg-[rgba(255,255,255,0.9)] p-8 shadow-[0_22px_54px_rgba(30,22,16,0.05)] ring-1 ring-white/35">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent/82">
        Experiencia real
      </p>
      <p className="mt-5 text-[1.04rem] leading-[1.9] text-foreground/88">"{quote}"</p>
      <div className="mt-auto border-t border-border/55 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">{name}</p>
        <p className="mt-2 text-[0.8rem] uppercase tracking-[0.18em] text-muted-foreground">
          {detail}
        </p>
      </div>
    </article>
  );
}

export function Metodologia() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [featured, ...secondary] = testimonials;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.04,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="relative overflow-hidden bg-background pt-24 pb-14 md:pt-28 md:pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center md:flex"
      >
        <div className="h-14 w-px bg-gradient-to-b from-accent/0 via-accent/35 to-accent/10" />
        <div className="mt-2 h-2.5 w-2.5 rounded-full border border-accent/40 bg-background shadow-[0_0_0_10px_rgba(181,142,97,0.05)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : {}}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center md:hidden">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Testimonios
          </p>
          <h2 className="text-balance font-serif text-4xl tracking-tight text-foreground">
            La experiencia de nuestros clientes
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
            Una lectura serena del proceso, del resultado y de lo que cambia cuando un
            proyecto está bien dirigido.
          </p>
        </div>

        <div className="mt-12 space-y-5 md:hidden">
          {testimonials.map((testimonial, index) => (
            <EditorialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              detail={testimonial.detail}
              featured={index === 0}
            />
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="hidden md:block"
        >
          <motion.div variants={itemVariants} className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Testimonios
            </p>
            <h2 className="text-balance font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              La experiencia de nuestros clientes
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Una lectura serena del proceso, del resultado y de lo que cambia cuando un
              proyecto está bien dirigido.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div variants={itemVariants}>
              <EditorialCard
                quote={featured.quote}
                name={featured.name}
                detail={featured.detail}
                featured
              />
            </motion.div>

            <div className="grid gap-6">
              {secondary.map((testimonial) => (
                <motion.div key={testimonial.name} variants={itemVariants}>
                  <EditorialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    detail={testimonial.detail}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
