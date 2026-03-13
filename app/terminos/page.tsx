'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <SectionWrapper>
          <section className="mx-auto max-w-4xl rounded-[1.5rem] border border-border/50 bg-card px-6 py-10 md:px-10 md:py-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Términos y condiciones
            </p>
            <h1 className="mb-6 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Esta web presenta servicios de arquitectura y sirve como punto de contacto inicial
            </h1>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                La información publicada en esta web tiene carácter orientativo
                y sirve para explicar el enfoque de trabajo, los servicios y la
                forma de iniciar una primera reunión o conversación sobre el proyecto.
              </p>
              <p>
                Ningún texto de esta página sustituye una propuesta detallada,
                un alcance técnico cerrado o una contratación específica. Cada
                proyecto requiere valoración propia, definición de programa,
                documentación y calendario.
              </p>
              <p>
                El envío de un formulario no implica aceptación automática del
                proyecto ni cierre de un encargo. El siguiente paso siempre es
                revisar el caso con calma.
              </p>
            </div>
          </section>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
