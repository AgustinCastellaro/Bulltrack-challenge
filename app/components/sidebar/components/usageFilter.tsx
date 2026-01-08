import { useFiltersStore } from "@/app/store/filters.slice";
import { Switch } from "../../switch";

export function UsageFilter() {
    const { usage, toggleUsage } = useFiltersStore();
    
    return (
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
    )
}