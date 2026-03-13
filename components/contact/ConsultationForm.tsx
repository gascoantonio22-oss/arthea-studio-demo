'use client';

import { MessageCircle } from 'lucide-react';
import { ConsultationFormContent } from '@/components/modal/ConsultationFormContent';

export function ConsultationForm() {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(24,20,18,0.15),rgba(14,13,12,0))] py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.84fr_1fr]">
        <div className="rounded-[1.8rem] border border-white/10 bg-[rgba(24,20,18,0.56)] p-8 text-primary-foreground shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Antes de enviar
          </p>
          <h2 className="text-balance font-serif text-3xl tracking-tight md:text-[2.15rem]">
            Cuéntanos lo esencial antes de la primera reunión
          </h2>
          <p className="mt-5 max-w-[30rem] text-sm leading-relaxed text-primary-foreground/72 md:text-[0.98rem]">
            Indícanos qué tipo de vivienda o intervención tienes en mente, en
            qué fase estás y qué necesitas resolver. Así, nuestra conversación
            empezará con contexto real y enfoque claro.
          </p>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Qué obtienes:
          </p>
          <ul className="space-y-3 text-sm leading-relaxed text-primary-foreground/72 md:text-[0.98rem]">
            <li>Respuesta adaptada a tu proyecto y punto de partida.</li>
            <li>Primera reunión útil para hablar de alcance, tiempos e inversión.</li>
            <li>Sin presión comercial ni sensación de formulario genérico.</li>
          </ul>

          <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              WhatsApp
            </p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72">
              Si prefieres un contacto más directo, puedes escribirnos ahora.
            </p>
            <a
              href="https://wa.me/34911234567?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20primera%20reuni%C3%B3n%20para%20mi%20proyecto%20de%20arquitectura."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-[rgba(255,255,255,0.06)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:border-accent/60 hover:bg-[rgba(255,255,255,0.1)]"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/12 bg-[rgba(255,252,248,0.94)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] md:p-10">
          <ConsultationFormContent />
        </div>
      </div>
    </section>
  );
}
