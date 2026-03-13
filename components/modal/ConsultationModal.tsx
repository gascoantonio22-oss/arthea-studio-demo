'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { useConsultationModal } from '@/components/hooks/useConsultationModal';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function ConsultationModal() {
  const router = useRouter();
  const { isOpen, close } = useConsultationModal();
  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría solicitar una primera reunión para mi proyecto de arquitectura.'
  );

  const handleContactRedirect = () => {
    close();
    window.setTimeout(() => {
      router.push('/contact');
    }, 80);
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-md border-border bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-foreground">
            Solicitar <span className="font-medium">primera reunión</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Elige la forma de contacto que te resulte más cómoda. Nuestra primera conversación nos permite entender tu visión y ordenar el proyecto con claridad antes de tomar decisiones.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <a
            href={`https://wa.me/34911234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:bg-secondary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-foreground">WhatsApp</p>
              <p className="text-sm text-muted-foreground">
                Para un contacto directo y ágil, ideal para consultas inmediatas.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </a>

          <button
            type="button"
            onClick={handleContactRedirect}
            className="flex w-full items-center gap-4 rounded-lg border border-border bg-background p-4 text-left transition-all hover:border-primary/30 hover:bg-secondary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-foreground">Formulario</p>
              <p className="text-sm text-muted-foreground">
                Déjanos tus datos y te responderemos con precisión y detalle, cuidando cada
                aspecto de tu proyecto.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={close} className="text-muted-foreground hover:text-foreground">
            Seguir navegando
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
