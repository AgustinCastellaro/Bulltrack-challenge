import { SortingTypes, useFiltersStore } from "@/app/store/filters.slice";
import Selector from "../../selector";
import { sortingOptions } from "@/app/constants/inputs";

export function Sorting() {
    const{ sorting, setSorting } = useFiltersStore();
    
    return(
        <div className="flex flex-col gap-2">
            <p className="text-sm font-normal text-white uppercase">ordenamiento</p>
            <Selector options={sortingOptions} selected={sorting} onChange={(value: SortingTypes) => setSorting(value)} />
        </div>
    )
}