'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { ConsultationFormContent } from '@/components/modal/ConsultationFormContent';

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [isFormOpen, setIsFormOpen] = useState(false);

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
        initial={{ opacity: 0, scale: 0.82, filter: 'blur(28px)' }}
        animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-[26rem] w-[min(86vw,54rem)] rounded-full bg-[radial-gradient(circle,rgba(191,153,101,0.12)_0%,rgba(191,153,101,0.06)_34%,transparent_72%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-5xl px-6"
      >
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent/90">
            Primera reunión
          </p>
          <h2 className="text-balance font-serif text-[2.35rem] tracking-tight text-primary-foreground md:text-[4rem]">
            Cuéntanos lo que buscas
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-pretty text-[0.98rem] leading-relaxed text-primary-foreground/60 md:text-[1.04rem]">
            Un primer contexto claro nos ayuda a entender el tipo de proyecto, el momento
            en el que estás y cómo orientar la siguiente conversación.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl rounded-[1.9rem] border border-white/10 bg-[rgba(255,251,246,0.96)] p-7 shadow-[0_18px_36px_rgba(0,0,0,0.16)] md:p-8"
        >
          <div className="text-left">
            <div className="max-w-[30rem]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent/88">
                Formulario
              </p>
              <p className="mt-3 max-w-[28rem] text-[0.95rem] leading-relaxed text-muted-foreground">
                Solo lo esencial para que la primera reunión empiece con contexto real.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsFormOpen((current) => !current)}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-[rgba(23,21,22,0.96)] px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_10px_22px_rgba(20,16,12,0.08)] transition-all duration-300 hover:border-accent/32 hover:bg-[rgba(23,21,22,1)]"
              >
                {isFormOpen ? 'Ocultar formulario' : 'Abrir formulario'}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${isFormOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <a
                href="https://wa.me/34911234567?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20primera%20reuni%C3%B3n%20para%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-foreground/72 transition-colors duration-300 hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isFormOpen ? (
              <motion.div
                key="form"
                initial={{ height: 0, opacity: 0, y: -8 }}
                animate={{ height: 'auto', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-7 border-t border-border/45 pt-7 [&_label]:text-[0.84rem] [&_label]:font-medium [&_label]:text-foreground/82 [&_textarea]:rounded-[1.35rem] [&_textarea]:border-border/70 [&_textarea]:bg-background/80 [&_textarea]:shadow-none [&_input]:border-border/70 [&_input]:bg-background/80 [&_input]:shadow-none [&_select]:border-border/70 [&_select]:bg-background/80 [&_select]:shadow-none [&_button]:h-11 [&_button]:rounded-full [&_button]:border-foreground/12 [&_button]:bg-[rgba(23,21,22,0.96)] [&_button]:text-[0.69rem] [&_button]:tracking-[0.2em] [&_button]:shadow-[0_10px_22px_rgba(20,16,12,0.08)]">
                  <ConsultationFormContent />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
