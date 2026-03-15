'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const cases = [
  {
    label: 'Caso 01',
    title: 'Residencia urbana reinterpretada',
    location: 'Madrid',
    image: '/images/antes-despues/after-1.png',
    challenge:
      'Una vivienda luminosa pero demasiado vacía en escala, temperatura y carácter residencial.',
    approach:
      'Ordenamos proporciones, materialidad y mobiliario para transformar un contenedor neutro en una estancia sofisticada y habitable.',
    result:
      'El resultado es una sala con presencia, más calma visual y una lectura espacial mucho más cálida.',
  },
  {
    label: 'Caso 02',
    title: 'Cocina convertida en pieza central',
    location: 'Barcelona',
    image: '/images/antes-despues/after-2.png',
    challenge:
      'Un espacio correcto a nivel funcional, pero sin nobleza material ni valor perceptivo dentro del conjunto de la vivienda.',
    approach:
      'Trabajamos continuidad, luz integrada y una composición más precisa para que la cocina pasara a formar parte del lenguaje del proyecto.',
    result:
      'La estancia gana elegancia, profundidad y una sensación de inversión bien resuelta en cada plano.',
  },
  {
    label: 'Caso 03',
    title: 'Baño principal con lenguaje propio',
    location: 'Marbella',
    image: '/images/antes-despues/after-3.png',
    challenge:
      'Un volumen amplio pero impersonal, sin una atmósfera definida ni una jerarquía clara de materiales.',
    approach:
      'Introdujimos materia, iluminación ambiental y una composición serena para elevar la experiencia cotidiana del espacio.',
    result:
      'El baño deja de ser neutro y se convierte en una estancia con identidad, equilibrio y presencia premium.',
  },
];

function CaseCard({
  label,
  title,
  location,
  image,
  challenge,
  approach,
  result,
  featured = false,
}: {
  label: string;
  title: string;
  location: string;
  image: string;
  challenge: string;
  approach: string;
  result: string;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="overflow-hidden rounded-[2.2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,242,234,0.92))] shadow-[0_28px_70px_rgba(30,22,16,0.06)] ring-1 ring-white/40">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[22rem] overflow-hidden lg:min-h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,18,16,0.08),rgba(20,18,16,0.28))]" />
            <div className="absolute left-6 top-6 rounded-full border border-white/18 bg-[rgba(16,14,13,0.28)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              {label}
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent/85">
                {location}
              </p>
              <h3 className="mt-4 font-serif text-[2.2rem] leading-[1.02] tracking-tight text-foreground md:text-[2.8rem]">
                {title}
              </h3>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent/82">
                  Punto de partida
                </p>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{challenge}</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent/82">
                  Dirección del proyecto
                </p>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{approach}</p>
              </div>
              <div className="border-t border-border/60 pt-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent/82">
                  Resultado
                </p>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground/88">{result}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-[2rem] border border-border/70 bg-[rgba(255,255,255,0.92)] shadow-[0_22px_54px_rgba(30,22,16,0.05)] ring-1 ring-white/35">
      <div className="relative h-[15rem] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,18,16,0.06),rgba(20,18,16,0.22))]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-[rgba(16,14,13,0.26)] px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {label}
        </div>
      </div>

      <div className="p-7">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent/84">{location}</p>
        <h3 className="mt-3 font-serif text-[1.9rem] leading-[1.06] tracking-tight text-foreground">
          {title}
        </h3>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-accent/82">
              Punto de partida
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{challenge}</p>
          </div>
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-accent/82">
              Resultado
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/88">{result}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Metodologia() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [featured, ...secondary] = cases;

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
      id="casos"
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
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Casos de proyecto
          </p>
          <h2 className="text-balance font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            Tres ejemplos de cómo cambia un espacio cuando la dirección es precisa
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-muted-foreground">
            No solo importa el resultado final. También importa cómo se lee el punto de
            partida, cómo se ordena el criterio y qué decisiones convierten un espacio en
            algo realmente valioso.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <CaseCard {...featured} featured />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {secondary.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <CaseCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
