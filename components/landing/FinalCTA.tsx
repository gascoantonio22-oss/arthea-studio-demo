'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { ConsultationFormContent } from '@/components/modal/ConsultationFormContent';

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(181,142,97,0.11),transparent_18%),linear-gradient(180deg,#151315_0%,#101012_100%)] py-18 text-primary-foreground md:py-20"
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
        <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-accent/8" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent/90">
            Primera reunión
          </p>
          <h2 className="text-balance font-serif text-[2.35rem] tracking-tight text-primary-foreground md:text-[4rem]">
            Un cierre sereno para empezar bien
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-pretty text-[0.98rem] leading-relaxed text-primary-foreground/60 md:text-[1.04rem]">
            Si la dirección del proyecto encaja contigo, aquí puedes dar el paso de forma
            clara, sin ruido y con el contexto justo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.68fr_1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -18, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 shadow-[0_18px_34px_rgba(0,0,0,0.14)] backdrop-blur-sm md:p-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/88">
                Antes de enviar
              </p>
              <h3 className="mt-4 max-w-[18rem] font-serif text-[1.7rem] leading-[1.02] tracking-tight text-primary-foreground md:text-[2rem]">
                Solo lo esencial, bien planteado
              </h3>
              <p className="mt-5 max-w-[26rem] text-[0.95rem] leading-relaxed text-primary-foreground/64">
                Cuéntanos el tipo de espacio, el momento en el que estás y qué necesitas
                resolver. Con eso, la conversación ya empieza con una base real.
              </p>

              <div className="mt-8 space-y-3 border-t border-white/8 pt-6 text-[0.9rem] leading-relaxed text-primary-foreground/58">
                <p>Alcance claro desde el primer contacto.</p>
                <p>Tiempos e inversión tratados con más contexto.</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/8 pt-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent/86">
                WhatsApp
              </p>
              <a
                href="https://wa.me/34911234567?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20primera%20reuni%C3%B3n%20para%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/88 transition-all duration-300 hover:border-accent/38 hover:bg-[rgba(255,255,255,0.08)] hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.9rem] border border-white/10 bg-[rgba(255,251,246,0.955)] p-7 shadow-[0_18px_36px_rgba(0,0,0,0.16)] md:p-8"
          >
            <ConsultationFormContent />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
