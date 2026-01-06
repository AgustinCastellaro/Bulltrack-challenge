import TableContainer from "../table";
import TableFilters from "../table/filters";
import TableRanking from "../table/ranking";
import ContainerHeader from "./components/containerHeader";
import { useFilteredBulls } from "@/app/hooks/useFilteredBulls";

export default function Container(){
    const { bulls, total } = useFilteredBulls();

    return (
        <section className="flex flex-col w-full gap-5.5 bg-gray-100 w-full min-h-full py-6 px-8 rounded-t-[40px]">
            <ContainerHeader />
            <TableRanking />
            <TableFilters />
            <TableContainer />
        </section>
    )
}