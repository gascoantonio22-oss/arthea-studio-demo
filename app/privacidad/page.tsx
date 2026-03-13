'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <SectionWrapper>
          <section className="mx-auto max-w-4xl rounded-[1.5rem] border border-border/50 bg-card px-6 py-10 md:px-10 md:py-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Política de privacidad
            </p>
            <h1 className="mb-6 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Tratamos tus datos solo para gestionar el contacto sobre tu proyecto
            </h1>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Los datos que compartes mediante los formularios de esta web se
                usan únicamente para responder a tu solicitud, valorar el encaje
                del proyecto y mantener la comunicación relacionada con un posible encargo.
              </p>
              <p>
                No cedemos tu información a terceros ajenos al proyecto. Si el
                encargo avanza, los datos podrán utilizarse para preparar
                propuesta, documentación y coordinación vinculada al servicio solicitado.
              </p>
              <p>
                Puedes solicitar acceso, rectificación o eliminación de tus
                datos escribiendo a <span className="text-foreground">hola@artheastudio.es</span>.
              </p>
            </div>
          </section>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
