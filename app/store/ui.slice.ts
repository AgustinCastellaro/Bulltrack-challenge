import { create } from "zustand";
import { persist } from 'zustand/middleware';

export type ViewTypes = "table" | "list";

interface UIState {
  view: ViewTypes;
  setView: (view: ViewTypes) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      view: "list",
      setView: (view: ViewTypes) => set({ view }),
    }),
    {
      name: 'bulls-ui-storage', // nombre en localStorage
      partialize: (state) => ({ 
        view: state.view
      }),
    }
  )
)