import { create } from "zustand";
import { DataItem } from "@/app/types/data";
import { getMockData } from "@/app/services/bulls-service";

interface DataState {
  data: DataItem[];
  loadData: () => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const useDataStore = create<DataState>()(
  (set, get) => ({
    data: [],
    loading: true,

    setLoading: (value: boolean) => set({ loading: value }),

    loadData: async () => {
      set({ loading: true });
      try{
        const data = await getMockData();
        set({ data, loading: false });
      }catch (error) {
        set({ loading: false });
      }
    },
  })
)