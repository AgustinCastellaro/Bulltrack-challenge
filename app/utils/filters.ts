import { USAGE_FILTER_VALUE } from "@/app/constants/mocks";
import { CoatTypes, OriginTypes } from "@/app/store/filters.slice";
import { DataItem } from "@/app/types/data";

interface FilterParams {
  data: DataItem[];
  search: string;
  origin: OriginTypes;
  usage: boolean;
  coat: CoatTypes;
  sorting: string;
  favorites: string[];
}

const ORIGIN_MAPPING: Record<OriginTypes, string | null> = {
  all: null,
  favorites: null,
  catalog: "catalogo",
  own: "propio"
}

const COAT_MAPPING: Record<CoatTypes, string | null> = {
  all: null,
  black: "negro",
  red: "colorado"
}

// Función para filtrar por búsqueda
const searchFilter = (item: DataItem, search: string) => {
  if(!search) return true;

  return item.caravana
        .toLowerCase()
        .includes(search.toLowerCase()) || item.nombre
        .toLowerCase()
        .includes(search.toLowerCase());
}

// Función para filtrar por el origen
const originFilter = (item: DataItem, origin: OriginTypes, favorites: string[]) => {
   if(origin === "favorites"){
      return favorites.includes(item.id.toString());
    }

    if(origin === "all") return true;

    // Si no es "all" ni "favorites", filtrar por origen
    const mappedOrigin = ORIGIN_MAPPING[origin];
    return mappedOrigin ? item.origen !== mappedOrigin : true;
}

// Función para filtrar por el uso
const usageFilter = (item: DataItem, usage: boolean) => {
  if(!usage || item.uso === USAGE_FILTER_VALUE) return true;
}

// Función para filtrar por pelaje
const coatFilter = (item: DataItem, coat: CoatTypes) => {
  if(coat === "all") return true;

  const mappedCoat = COAT_MAPPING[coat];
  return mappedCoat ? item.pelaje === mappedCoat : true;
}

// Función para ordenar la data
const sortingData = (data: DataItem[], sorting: string) => {
  if (sorting === "none") return data;
  
  return data.sort((a, b) => {
    const scoreA = a.bull_score;
    const scoreB = b.bull_score;
    
    switch (sorting) {
      case "asc":
        return scoreB - scoreA;
      case "desc":
        return scoreA - scoreB;
      default:
        return 0;
    }
  });
}

// Filtra la data en base a la busqueda realizada o por favoritos
export function filterData({
  data,
  search,
  origin,
  usage,
  coat,
  sorting,
  favorites,
}: FilterParams): DataItem[] {
  // Se filtra la data
  let filteredData = data.filter(item => {
    return (
      searchFilter(item, search) &&
      originFilter(item, origin, favorites) &&
      usageFilter(item, usage) &&
      coatFilter(item, coat)
    )
  })

  // Se aplica el ordenamiento
  return sortingData(filteredData, sorting)
}