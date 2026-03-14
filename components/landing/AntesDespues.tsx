'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'Salón principal',
    subtitle:
      'Transformado con mayor calidez, proporciones equilibradas y una atmósfera residencial que combina sofisticación y confort de manera natural.',
    before: '/images/antes-despues/before-1.png',
    after: '/images/antes-despues/after-1.png',
    beforeAlt: 'Salon antes del proyecto',
    afterAlt: 'Salon despues del proyecto',
  },
  {
    title: 'Cocina de diario',
    subtitle:
      'De un espacio funcional a un entorno noble y luminoso, donde cada detalle refleja elegancia y calidad excepcional.',
    before: '/images/antes-despues/before-2.png',
    after: '/images/antes-despues/after-2.png',
    beforeAlt: 'Cocina antes del proyecto',
    afterAlt: 'Cocina despues del proyecto',
  },
  {
    title: 'Baño principal',
    subtitle:
      'De un volumen neutro a una estancia con presencia, materiales exclusivos y un lenguaje de diseño verdaderamente premium.',
    before: '/images/antes-despues/before-3.png',
    after: '/images/antes-despues/after-3.png',
    beforeAlt: 'Bano antes del proyecto',
    afterAlt: 'Bano despues del proyecto',
  },
];

function BeforeAfterCard({
  title,
  subtitle,
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  title: string;
  subtitle: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group h-full"
    >
      <div className="relative h-full rounded-[1.35rem] border border-[color:rgba(181,142,97,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,242,234,0.94))] p-[10px] shadow-[0_28px_70px_rgba(34,26,18,0.1)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(181,142,97,0.45)] to-transparent" />
        <div className="relative h-full overflow-hidden rounded-[1rem] border border-white/70 bg-card/95">
          <div
            ref={frameRef}
            className="relative aspect-[5/4] cursor-col-resize select-none touch-none md:aspect-[6/5]"
            onPointerDown={(event) => {
              updatePosition(event.clientX);
              setDragging(true);
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (dragging) updatePosition(event.clientX);
            }}
            onPointerUp={() => setDragging(false)}
            onPointerCancel={() => setDragging(false)}
          >
            <Image
              src={before}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 46vw"
            />

            <div
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
              <Image
                src={after}
                alt={afterAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 46vw"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%,transparent_72%,rgba(33,24,16,0.16))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/8 to-transparent" />

            <div
              className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110 active:scale-95">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 8 4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>

            <div className="absolute top-4 left-4 z-10 select-none">
              <span className="rounded-full border border-white/15 bg-[rgba(24,20,16,0.42)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md">
                Antes
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 select-none">
              <span className="rounded-full border border-white/15 bg-[rgba(24,20,16,0.42)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md">
                Después
              </span>
            </div>
          </div>

          <div className="border-t border-border/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,245,238,0.92))] px-6 py-5">
            <p className="font-serif text-[1.8rem] leading-none text-foreground">{title}</p>
            <p className="mt-2 max-w-[34rem] text-sm leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AntesDespues() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-12%' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
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
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f0e7db_0%,#ebdfd1_100%)] py-24 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-10 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-foreground" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >
        <div className="h-14 w-px bg-gradient-to-b from-accent/0 via-accent/35 to-accent/10" />
        <div className="mt-2 h-2.5 w-2.5 rounded-full border border-accent/40 bg-background shadow-[0_0_0_10px_rgba(181,142,97,0.05)]" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-[92rem] px-6"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Resultados
          </p>
          <h2 className="text-balance font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            Antes y después
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Arrastra el deslizador y descubre cómo un proyecto arquitectónico
            de lujo transforma la percepción del espacio. Cada detalle, luz y
            proporción se reinterpreta para crear un ambiente sofisticado y
            perfectamente equilibrado.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={index === 2 ? 'lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-[46rem]' : ''}
            >
              <BeforeAfterCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
