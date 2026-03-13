'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Lo que más valoramos fue la claridad con la que el estudio interpretó nuestro estilo de vida. Cada espacio se diseñó con precisión, y el resultado transmite lujo, armonía y personalidad desde el primer instante.',
    name: 'Victoria Ashford',
    role: 'Propietaria, Madrid',
    image: '/images/reference/headshot-1.jpg',
  },
  {
    quote:
      'Cuando una villa está bien concebida, se nota en cada detalle. La proporción, la luz y la serenidad del conjunto transformaron por completo nuestra experiencia de habitarla.',
    name: 'Marcos Chen',
    role: 'Cliente, Barcelona',
    image: '/images/reference/headshot-2.jpg',
  },
  {
    quote:
      'Teníamos una intuición sobre cómo queríamos nuestra casa, pero el estudio la convirtió en un proyecto sólido y elegante. El resultado es natural, sofisticado y auténticamente nuestro.',
    name: 'Isabel Montero',
    role: 'Propietaria, Ibiza',
    image: '/images/reference/headshot-3.jpg',
  },
  {
    quote:
      'La consistencia entre concepto, diseño y ejecución fue decisiva. Cada elección refleja criterio espacial y estética de lujo, no solo una solución técnica.',
    name: 'David Torres',
    role: 'Cliente, Marbella',
    image: '/images/reference/headshot-4.jpg',
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-sm border border-border/70 bg-card/90 p-10 transition-all duration-300 hover:border-accent/20 hover:shadow-md">
      <div className="mb-4 flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <p className="flex-1 text-lg leading-relaxed text-card-foreground">&quot;{quote}&quot;</p>
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={image}
          alt={`${name} retrato`}
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-card-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Metodologia() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.62,
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

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12 hidden text-center md:block md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Testimonios
          </p>
          <h2 className="text-balance font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            La experiencia de nuestros clientes
          </h2>
        </motion.div>

        <div className="md:hidden">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Testimonios
            </p>
            <h2 className="text-balance font-serif text-4xl tracking-tight text-foreground">
              La experiencia de nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>

        <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="h-full"
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
              />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
