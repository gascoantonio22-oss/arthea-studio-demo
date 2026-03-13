'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    title: 'Consulta estratégica',
    price: '450€',
    suffix: '/ sesión',
    description:
      'Una sesión de estudio para leer el espacio, ordenar prioridades y fijar una dirección clara antes de desarrollar el proyecto.',
    features: [
      'Reunión inicial de 90 minutos',
      'Lectura de distribución, luz y circulación',
      'Orientación sobre alcance y prioridades',
      'Primer marco de inversión',
      'Resumen posterior con recomendaciones',
    ],
    featured: false,
  },
  {
    title: 'Proyecto residencial',
    price: 'Desde 3.500€',
    suffix: '/ según alcance',
    description:
      'La línea adecuada para desarrollar una vivienda o una intervención interior con criterio espacial, material y técnico.',
    features: [
      'Todo lo incluido en la consulta',
      'Concepto y narrativa de proyecto',
      'Planos y definición espacial',
      'Selección de materiales y paleta',
      'Criterio de iluminación y mobiliario fijo',
      'Coordinación con industriales y consultores',
    ],
    featured: true,
  },
  {
    title: 'Dirección integral',
    price: 'A medida',
    suffix: '/ honorarios',
    description:
      'Un acompañamiento completo para proyectos que requieren dirección creativa, interlocución técnica y seguimiento hasta el último detalle.',
    features: [
      'Todo lo incluido en el proyecto',
      'Dirección creativa y técnica',
      'Revisión de detalle y encuentros',
      'Visitas y seguimiento de obra',
      'Coordinación con proveedores',
      'Entrega final y estilismo espacial',
    ],
    featured: false,
  },
];

export function ProbasDeAutoridad() {
  return (
    <section id="pricing" className="bg-secondary/35 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Servicios
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Líneas de servicio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Cada nivel está pensado para ayudarte a decidir con claridad qué
            tipo de acompañamiento necesita tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={[
                'relative flex h-full flex-col rounded-xl border bg-card p-8 shadow-sm transition-all duration-300',
                tier.featured
                  ? 'border-accent shadow-[0_18px_40px_rgba(181,142,97,0.16)]'
                  : 'border-border/50',
              ].join(' ')}
            >
              {tier.featured ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                  Más solicitado
                </div>
              ) : null}

              <h3 className="text-2xl font-semibold text-foreground">{tier.title}</h3>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-3xl font-semibold tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="pb-1 text-sm text-muted-foreground">{tier.suffix}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.featured ? 'default' : 'outline'}
                className={[
                  'mt-8 rounded-lg py-3 text-sm',
                  tier.featured
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'border-accent/40 bg-transparent hover:bg-accent/8',
                ].join(' ')}
              >
                <Link href="/contact">Solicitar reunion</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
