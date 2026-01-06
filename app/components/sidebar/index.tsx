import RadioGroup from "../radio-group";
import { coatOptions, originOptions, sortingOptions } from "@/app/constants/inputs";
import { CoatTypes, OriginTypes, SortingTypes } from "@/app/store/filters.slice";
import { Switch } from "../switch";
import Selector from "../selector";
import Button from "../button";
import { useFiltersStore } from "@/app/store/filters.slice";

export default function Sidebar() {
    const { origin, setOrigin, usage, toggleUsage, coat, setCoat, sorting, setSorting } = useFiltersStore();
    
    return (
        <aside className="py-5.5 pl-10 pr-6 w-80 min-h-full bg-dark-green flex flex-col gap-6.5">
            <h2 className="text-sm font-medium text-white uppercase">filtros activos</h2>
            <div className="flex flex-col gap-4">
                <p className="text-sm font-normal text-white capitalize">origen</p>
                <RadioGroup options={originOptions} selected={origin} onChange={(value: OriginTypes) => setOrigin(value)} />
            </div>
            <div className="w-full h-px bg-gray-500"></div>
            <div className="flex flex-col gap-4">
                <p className="text-sm font-normal text-white uppercase">filtros productivos</p>
                <div className="flex justify-between gap-2 py-5 px-4 bg-green-400 rounded-lg">
                    <p className="relative flex flex-col gap-1 text-sm font-normal text-white">
                        Para vaquillona
                        <span className="text-xs absolute bottom-[-12px]">Facilidad de parto</span>
                    </p>
                    <Switch checked={usage} onChange={() => toggleUsage()} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-normal text-white capitalize">pelaje</p>
                <Selector options={coatOptions} selected={coat} onChange={(value: CoatTypes) => setCoat(value)} />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-normal text-white uppercase">ordenamiento</p>
                <Selector options={sortingOptions} selected={sorting} onChange={(value: SortingTypes) => setSorting(value)} />
            </div>
            <div className="w-full h-px bg-gray-500"></div>

            <div className="flex flex-col gap-2 p-4 bg-green-400 rounded-lg">
                <p className="text-sm font-semibold text-white">Objetivo actual</p>
                <p className="text-sm font-light text-white mb-2">
                    Maximizar la ganancia de peso (destete)<br /> manteniendo facilidad de parto.
                </p>
                <Button 
                    position="right"
                    text="Editar criterios"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    }
                    onChange={() => {}}
                    type="secondary"
                />
            </div>
        </aside>
    )
}