'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    type: 'range' as const,
    start: 6,
    end: 10,
    suffix: ' Sem.',
    label: 'Tiempo medio para definir un proyecto residencial',
  },
  {
    type: 'number' as const,
    end: 92,
    suffix: '%',
    label: 'Proyectos entregados segun calendario acordado',
  },
  {
    type: 'number' as const,
    end: 120,
    suffix: '+',
    label: 'Espacios residenciales acompañados',
  },
];

interface CounterValueProps {
  type: 'number' | 'range';
  end: number;
  start?: number;
  suffix: string;
}

function CounterValue({ type, end, start = 0, suffix }: CounterValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [primaryValue, setPrimaryValue] = useState(0);
  const [secondaryValue, setSecondaryValue] = useState(type === 'range' ? 0 : end);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPrimaryValue(type === 'range' ? start : end);
      setSecondaryValue(end);
      return;
    }

    const duration = 1400;
    const animationStart = performance.now();
    let frameId = 0;

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - animationStart) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      if (type === 'range') {
        setPrimaryValue(Math.round(start * eased));
      } else {
        setPrimaryValue(Math.round(end * eased));
      }

      setSecondaryValue(Math.round(end * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [end, isVisible, start, type]);

  const content =
    type === 'range'
      ? `${primaryValue}-${secondaryValue}${suffix}`
      : `${primaryValue}${suffix}`;

  return (
    <span
      ref={ref}
      className="font-mono text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
    >
      {content}
    </span>
  );
}

export function Tratamientos() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 py-4 text-center">
            <CounterValue
              type={stat.type}
              start={stat.type === 'range' ? stat.start : undefined}
              end={stat.end}
              suffix={stat.suffix}
            />
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
