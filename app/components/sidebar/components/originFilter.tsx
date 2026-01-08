import { originOptions } from "@/app/constants/inputs";
import RadioGroup from "../../radio-group";
import { OriginTypes, useFiltersStore } from "@/app/store/filters.slice";

export function OriginFilter() {
    const { origin, setOrigin } = useFiltersStore();
    
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm font-normal text-white capitalize">origen</p>
            <RadioGroup options={originOptions} selected={origin} onChange={(value: OriginTypes) => setOrigin(value)} />
        </div>
    )
}