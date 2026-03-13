'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const treatmentOptions = [
  'Vivienda unifamiliar',
  'Arquitectura interior',
  'Reforma residencial de alto nivel',
  'Redistribucion y proyecto espacial',
  'Licencias y documentacion',
  'Otro',
];

interface FormData {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

interface Errors {
  nombre?: string;
  email?: string;
  servicio?: string;
}

export function ConsultationFormContent() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const nextErrors: Errors = {};

    if (formData.nombre.trim().length < 2) {
      nextErrors.nombre = 'Por favor, ingresa tu nombre';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      nextErrors.email = 'Por favor, ingresa un email válido';
    }

    if (!formData.servicio.trim()) {
      nextErrors.servicio = 'Selecciona el servicio principal';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);
    setFormData({ nombre: '', email: '', servicio: '', mensaje: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[1.6rem] border border-border/45 bg-secondary/40 px-6 py-10 text-center">
        <p className="text-lg font-medium text-foreground">
          Gracias, tu solicitud ha quedado registrada.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Nos pondremos en contacto para preparar la primera reunión.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-foreground">
          Nombre completo
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={(event) => setFormData({ ...formData, nombre: event.target.value })}
          className="w-full rounded-full border border-input/80 bg-background/90 px-5 py-3.5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors focus:border-accent/70 focus:outline-none"
        />
        {errors.nombre ? <p className="mt-1 text-xs text-accent">{errors.nombre}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          className="w-full rounded-full border border-input/80 bg-background/90 px-5 py-3.5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors focus:border-accent/70 focus:outline-none"
        />
        {errors.email ? <p className="mt-1 text-xs text-accent">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="servicio" className="mb-2 block text-sm font-medium text-foreground">
          Servicio o interés principal
        </label>
        <select
          id="servicio"
          value={formData.servicio}
          onChange={(event) => setFormData({ ...formData, servicio: event.target.value })}
          className="w-full rounded-full border border-input/80 bg-background/90 px-5 py-3.5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors focus:border-accent/70 focus:outline-none"
        >
          <option value="">Selecciona una opción...</option>
          {treatmentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.servicio ? <p className="mt-1 text-xs text-accent">{errors.servicio}</p> : null}
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-foreground">
          Mensaje <span className="text-xs text-muted-foreground">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          placeholder="Cuéntanos qué espacio quieres desarrollar, en qué fase estás y qué te gustaría resolver..."
          value={formData.mensaje}
          onChange={(event) => setFormData({ ...formData, mensaje: event.target.value })}
          className="h-32 w-full resize-none rounded-[1.6rem] border border-input/80 bg-background/90 px-5 py-4 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors focus:border-accent/70 focus:outline-none"
        />
      </div>

      <Button
        type="submit"
        className="h-12 w-full rounded-full border border-accent/35 bg-[rgba(27,24,23,0.96)] px-6 text-[0.72rem] font-semibold tracking-[0.22em] text-primary-foreground uppercase shadow-[0_16px_32px_rgba(20,16,12,0.12)] transition-all duration-300 hover:border-accent/55 hover:bg-[rgba(27,24,23,1)]"
      >
        Solicitar primera reunión
      </Button>
    </form>
  );
}
