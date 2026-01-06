import { useMemo } from "react";
import { useFiltersStore } from "../store/filters.slice"
import { filterData } from "../utils/filters";
import { useDataStore } from "../store/data.slice";

export function useFilteredBulls () {
    const filters = useFiltersStore();
    const { data, loading } = useDataStore();

    const filteredData = useMemo(() => 
        filterData({
            data,
            search: filters.search,
            favorites: filters.favorites,
            origin: filters.origin,
            usage: filters.usage,
            coat: filters.coat,
            sorting: filters.sorting
        })
    , [data, filters.search, filters.favorites, filters.origin, filters.usage, filters.coat, filters.sorting])
    
    return {
        bulls: filteredData,
        total: filteredData.length,
        loading,
        isEmpty: filteredData.length === 0
    }
}