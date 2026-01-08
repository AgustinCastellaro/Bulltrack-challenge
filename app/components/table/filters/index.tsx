import { ButtonGroup } from "../../button-group";
import { buttonGroupOptions } from "../../../constants/inputs";
import SearchBar from "../../searchBar";
import { useUIStore, ViewTypes } from "@/app/store/ui.slice";
import { useFiltersStore } from "@/app/store/filters.slice";
import { useFilteredBulls } from "@/app/hooks/useFilteredBulls";

export default function TableFilters() {
  const { total } = useFilteredBulls()
  const { search, setSearch } = useFiltersStore();
  const { view, setView } = useUIStore();

  return (
    <div className="flex items-center p-4 bg-gray-200 rounded-lg gap-5">
      <SearchBar value={search} onChange={setSearch} text="Busca por caravana o nombre" />

      <p className='text-xl text-gray-300 font-normal mr-auto'><strong>{total}</strong> resultados</p>
      
      <ButtonGroup
        options={buttonGroupOptions}
        selected={view}
        onChange={(value: ViewTypes) => setView(value)}
      />
    </div>
  );
}