import { create } from "zustand";
import { persist } from 'zustand/middleware';

export type OriginTypes = "all" | "favorites" | "catalog" | "own";
export type CoatTypes = "all" | "black" | "red";
export type SortingTypes = "asc" | "desc" | "none";

interface FiltersState {
  search: string;
  setSearch: (value: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  origin: OriginTypes;
  setOrigin: (origin: OriginTypes) => void;
  usage: boolean;
  toggleUsage: () => void;
  coat: CoatTypes;
  setCoat: (coat: CoatTypes) => void;
  sorting: SortingTypes;
  setSorting: (sorting: SortingTypes) => void;
}

export const useFiltersStore = create<FiltersState>()(
  persist(
    (set, get) => ({
      search: "",
      favorites: [],
      origin: "all",
      usage: false,
      coat: "all",
      sorting: "asc",

      setOrigin: (origin: OriginTypes) => set({ origin }),

      toggleUsage: () =>
        set((state) => ({
          usage: !state.usage,
        })),

      setCoat: (coat: CoatTypes) => set({ coat }),

      setSorting: (sorting: SortingTypes) => set({ sorting }),

      setSearch: (search) => set({ search }),

      toggleFavorite: (id) => {
        const { favorites } = get();
        const newFavorites = favorites.includes(id)
          ? favorites.filter(favId => favId !== id)
          : [...favorites, id];
        
        set({ favorites: newFavorites });
      },
    }),
    {
      name: 'bulls-data-storage', // nombre en localStorage
      partialize: (state) => ({ 
        favorites: state.favorites
      }),
    }
  )
)