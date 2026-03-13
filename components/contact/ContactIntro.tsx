'use client';

import Image from 'next/image';

export function ContactIntro() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-28">
      <Image
        src="/images/hero-architecture.jpg"
        alt="Interior de arquitectura premium"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,14,13,0.7),rgba(18,16,14,0.82))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,142,97,0.14),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/12 bg-[rgba(20,18,17,0.48)] px-8 py-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl md:px-12 md:py-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Contacto
          </p>
          <h1 className="text-balance font-serif text-4xl tracking-tight text-primary-foreground md:text-6xl">
            Solicitar primera reunión
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[1.02rem] leading-relaxed text-primary-foreground/72 md:text-lg">
            Una conversación bien planteada permite ordenar el alcance, tus
            necesidades de vida, tiempos y nivel de ambición antes de tomar
            decisiones importantes.
          </p>
        </div>
      </div>
    </section>
  );
}
