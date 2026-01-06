import TableView from "./views/tableView";
import ListView from "./views/listView";
import { useUIStore } from "@/app/store/ui.slice";
import Spinner from "../spinner";
import EmptyMessage from "../noData";
import { useFilteredBulls } from "@/app/hooks/useFilteredBulls";

export default function TableContainer() {
  const { bulls, loading, isEmpty } = useFilteredBulls();
  const { view } = useUIStore();

  if (loading ) return <Spinner show text="Cargando información ..." />
  if (isEmpty ) return <EmptyMessage text="No hay datos disponibles" />

  return (
    <div className="flex flex-col gap-4 h-full">
      {
        view === "table" ? 
            <TableView data={bulls} />
          :
            <ListView data={bulls} />
      }
    </div>
  );
}