'use client';

import { MapPin } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="bg-transparent py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Presencia
          </p>
          <h2 className="text-balance font-serif text-3xl tracking-tight text-primary-foreground md:text-5xl">
            Trabajamos donde la arquitectura exige criterio, no ruido.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty leading-relaxed text-primary-foreground/66">
            Nuestra base está en Madrid, y abordamos cada proyecto residencial
            con una metodología pensada para garantizar lectura espacial, orden
            técnico y una dirección estética coherente de principio a fin. Cada
            intervención refleja equilibrio, sofisticación y atención al detalle.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-[1.8rem] border border-white/10 bg-[rgba(255,252,248,0.08)] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.16)] backdrop-blur-md md:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/28 bg-[rgba(255,255,255,0.04)] text-accent">
            <MapPin className="h-5 w-5" />
          </div>
          <p className="mt-5 font-serif text-2xl text-primary-foreground md:text-3xl">
            Barrio de Salamanca, Madrid
          </p>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/64 md:text-[0.98rem]">
            Reuniones con cita previa para proyectos residenciales y arquitectura interior.
          </p>
        </div>
      </div>
    </section>
  );
}
