'use client';

import { create } from 'zustand';

interface ConsultationModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useConsultationModal = create<ConsultationModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
