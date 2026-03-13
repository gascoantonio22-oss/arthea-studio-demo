'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <SectionWrapper>
          <section className="mx-auto max-w-4xl rounded-[1.5rem] border border-border/50 bg-card px-6 py-10 md:px-10 md:py-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Política de cookies
            </p>
            <h1 className="mb-6 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Usamos cookies básicas para mejorar la navegación y medir el rendimiento
            </h1>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Esta web puede utilizar cookies técnicas necesarias para su
                funcionamiento y cookies de analítica para entender mejor cómo
                se comportan las visitas.
              </p>
              <p>
                No usamos este espacio para perseguir al usuario con una
                experiencia invasiva. La finalidad principal es mantener la web
                operativa y aprender qué partes ayudan mejor a solicitar una primera reunión.
              </p>
              <p>
                Puedes gestionar las cookies desde la configuración de tu
                navegador si prefieres limitar o bloquear su uso.
              </p>
            </div>
          </section>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
