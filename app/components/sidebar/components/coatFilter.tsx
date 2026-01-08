import { CoatTypes, useFiltersStore } from "@/app/store/filters.slice";
import Selector from "../../selector";
import { coatOptions } from "@/app/constants/inputs";

export function CoatFilter() {
    const{ coat, setCoat } = useFiltersStore();
    
    return(
        <div className="flex flex-col gap-2">
            <p className="text-sm font-normal text-white capitalize">pelaje</p>
            <Selector options={coatOptions} selected={coat} onChange={(value: CoatTypes) => setCoat(value)} />
        </div>
    )
}