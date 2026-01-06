import { useCallback } from "react";
import { useFiltersStore } from "../store/filters.slice";

export function useFavorites() {
    const { favorites, toggleFavorite } = useFiltersStore();
    
    const isFavorite = useCallback((id: string) => 
        favorites.includes(id)
    , [favorites]);

    return {
        favorites,
        isFavorite,
        toggleFavorite,
    }
}