'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useConsultationModal } from '@/components/hooks/useConsultationModal';
import { ConsultationModal } from '@/components/modal/ConsultationModal';
import { useSmoothScroll } from '@/components/hooks/useSmoothScroll';

const navLinks = [
  { label: 'El Método', href: '/#metodo' },
  { label: 'Resultados', href: '/#portfolio' },
  { label: 'Testimonios', href: '/#testimonios' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useConsultationModal();
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const router = useRouter();

  const handleSectionNavigation = (href: string, closeMenu = false) => {
    const hash = href.replace('/', '');

    if (pathname !== '/') {
      if (closeMenu) {
        setIsOpen(false);
      }
      router.push(href);
      return;
    }

    if (closeMenu) {
      setIsOpen(false);
      window.setTimeout(() => scrollToSection(hash), 180);
      return;
    }

    scrollToSection(hash);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl tracking-tight text-foreground">
            <span className="font-serif">Arthea</span>
            <span className="ml-1 font-serif text-muted-foreground">Studio</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleSectionNavigation(link.href)}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              type="button"
              onClick={open}
              className="h-11 rounded-full border border-accent/30 bg-[rgba(255,251,246,0.84)] px-5 text-[0.68rem] font-semibold tracking-[0.24em] text-foreground uppercase shadow-[0_12px_28px_rgba(38,28,20,0.08)] backdrop-blur-md transition-all duration-300 hover:border-accent/55 hover:bg-[rgba(255,251,246,0.96)] hover:text-foreground hover:shadow-[0_18px_36px_rgba(38,28,20,0.11)]"
            >
              Iniciar Diagnóstico
            </Button>
          </div>

          <button
            type="button"
            className="p-2 text-foreground md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen((openState) => !openState)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-300 md:hidden',
            isOpen ? 'max-h-80 border-t border-border/50' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleSectionNavigation(link.href, true)}
                className="rounded-sm px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  window.setTimeout(() => open(), 120);
                }}
                className="h-12 w-full rounded-full border border-accent/30 bg-[rgba(255,251,246,0.9)] px-6 text-[0.68rem] font-semibold tracking-[0.24em] text-foreground uppercase shadow-[0_12px_28px_rgba(38,28,20,0.08)] transition-all duration-300 hover:border-accent/55 hover:bg-[rgba(255,251,246,0.98)] hover:text-foreground hover:shadow-[0_18px_36px_rgba(38,28,20,0.11)]"
              >
                Iniciar Diagnóstico
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <ConsultationModal />
    </>
  );
}
