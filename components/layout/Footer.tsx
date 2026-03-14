'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/components/hooks/useSmoothScroll';

const navLinks = [
  { label: 'El Método', href: '/#metodo' },
  { label: 'Resultados', href: '/#portfolio' },
  { label: 'Preguntas', href: '/#faq' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();
  const { scrollToSection } = useSmoothScroll();

  const handleSectionNavigation = (href: string) => {
    const hash = href.replace('/', '');

    if (pathname !== '/') {
      router.push(href);
      return;
    }

    scrollToSection(hash);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="text-xl tracking-tight text-primary-foreground">
              <span className="font-serif">Arthea</span>
              <span className="ml-1 font-serif text-primary-foreground/60">Studio</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Estudio de arquitectura premium con una mirada serena sobre la
              vivienda, el detalle y la manera en que se habita cada espacio.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Navegación
            </p>
            <nav className="mt-4 space-y-3 text-sm text-primary-foreground/60">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleSectionNavigation(link.href)}
                  className="block text-left transition-colors hover:text-accent"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Contacto
            </p>
            <div className="mt-4 space-y-3 text-sm text-primary-foreground/60">
              <p>hola@artheastudio.es</p>
              <p>+34 91 123 45 67</p>
              <p>Madrid y proyectos residenciales selectos</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Síguenos
            </p>
            <div className="mt-4 flex items-center gap-4 text-primary-foreground/60">
              <Link href="#" className="transition-colors hover:text-accent" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="transition-colors hover:text-accent" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="transition-colors hover:text-accent" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-primary-foreground/40">
            © {currentYear} Arthea Studio. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacidad" className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70">
              Términos
            </Link>
            <Link href="/cookies" className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70">
              Cookies
            </Link>
            <Button
              asChild
              className="hidden rounded-sm bg-accent px-4 py-2 text-xs uppercase tracking-[0.16em] text-accent-foreground hover:bg-accent/90 sm:inline-flex"
            >
              <Link href="/contact">Iniciar Diagnóstico</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
