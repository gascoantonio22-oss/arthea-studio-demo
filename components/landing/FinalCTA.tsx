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
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(181,142,97,0.16),transparent_18%),linear-gradient(180deg,#171416_0%,#0f0f11_100%)] py-20 text-primary-foreground md:py-24"
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
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent/90">
            Primera reunión
          </p>
          <h2 className="text-balance font-serif text-[2.55rem] tracking-tight text-primary-foreground md:text-5xl">
            El punto donde la web se convierte en proyecto
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[1rem] leading-relaxed text-primary-foreground/64 md:text-[1.08rem]">
            Si la dirección del espacio importa de verdad, este es el lugar natural para
            pasar de la inspiración a una conversación concreta, ordenada y útil.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.84fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -18, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-[0_28px_60px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Antes de empezar
            </p>
            <h3 className="mt-4 max-w-[22rem] font-serif text-[2rem] leading-[0.98] tracking-tight text-primary-foreground md:text-[2.35rem]">
              Una conversación breve puede ordenar mucho más de lo que parece
            </h3>
            <p className="mt-5 max-w-[31rem] text-[0.98rem] leading-relaxed text-primary-foreground/70">
              Nos ayuda a entender el tipo de vivienda o intervención, el momento en el
              que estás y el nivel de ambición del proyecto. Así, la siguiente decisión
              ya no nace de una intuición suelta, sino de un contexto claro.
            </p>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            <div className="space-y-4 text-[0.95rem] leading-relaxed text-primary-foreground/68">
              <p>Respuesta centrada en tu caso y en el punto real en el que se encuentra.</p>
              <p>Primera lectura útil para hablar de alcance, tiempos e inversión.</p>
              <p>Un contacto sereno, sin presión comercial y sin formularios impersonales.</p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                WhatsApp
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/68">
                Si prefieres un contacto más directo, puedes escribirnos ahora y abrir la
                conversación desde ahí.
              </p>
              <a
                href="https://wa.me/34911234567?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20primera%20reuni%C3%B3n%20para%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-[rgba(255,255,255,0.06)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:border-accent/58 hover:bg-[rgba(255,255,255,0.1)]"
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
            className="rounded-[2rem] border border-white/12 bg-[rgba(255,251,246,0.96)] p-8 shadow-[0_28px_60px_rgba(0,0,0,0.2)] md:p-10"
          >
            <ConsultationFormContent />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
