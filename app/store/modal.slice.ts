import { create } from "zustand";
import { persist } from 'zustand/middleware';

type ModalTypes = "welcome" | "stats";

interface ModalState {
  open: boolean;
  type: ModalTypes;
  setType: (type: ModalTypes) => void;
  rowSelected: string | null;
  setRowSelected: (id: string | null) => void;
  dontShowAgain: boolean;
  setDontShowAgain: () => void;
  closeModal: () => void;
  openWelcomeModal: () => void;
  openStatsModal: (id: string) => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useModalStore = create<ModalState>()(
  persist(
    (set, get) => ({
        open: false,
        type: "welcome",
        rowSelected: null,
        dontShowAgain: false,
        hasHydrated: false,

        setType: (type: ModalTypes) => set({ type }),

        setRowSelected: (id: string | null) => set(() => ({ rowSelected: id })),

        setDontShowAgain: () => set(() => ({ dontShowAgain: true })),

        openWelcomeModal: () => set(() => ({
          type: "welcome",
          rowSelected: null,
          open: true
        })),
        
        openStatsModal: (id: string) => set(() => ({
          type: "stats",
          rowSelected: id,
          open: true
        })),

        closeModal: () => set(() => ({ 
          open: false,
          rowSelected: null
        })),

        setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: 'bulls-modal-storage',
      partialize: (state) => ({ 
        dontShowAgain: state.dontShowAgain
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
)