import { ActualObjective } from "./components/actualObjective";
import { OriginFilter } from "./components/originFilter";
import { UsageFilter } from "./components/usageFilter";
import { CoatFilter } from "./components/coatFilter";
import { Sorting } from "./components/sorting";

export default function Sidebar() {
    return (
        <aside className="py-5.5 pl-10 pr-6 w-80 min-h-full bg-dark-green flex flex-col gap-6.5">
            <h2 className="text-sm font-medium text-white uppercase">filtros activos</h2>
            
            <OriginFilter />

            <div className="w-full h-px bg-gray-500"></div>

            <UsageFilter />
            
            <CoatFilter />

            <Sorting />

            <div className="w-full h-px bg-gray-500"></div>

            <ActualObjective />
        </aside>
    )
}