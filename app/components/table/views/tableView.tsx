import { DataItem } from "@/app/types/data";
import TableItem from "./components/TableItem";

export default function TableView({ data }: { data: DataItem[] }) {

    return (
        <table className="min-w-full">
            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left">Foto</th>
                    <th className="p-2 text-left">Nombre</th>
                    <th className="p-2 text-left">Tags</th>
                    <th className="p-2 text-left">Score</th>
                    <th className="p-2 text-left">Radar</th>
                    <th className="p-2 text-left">Acciones</th>
                </tr>
            </thead>
        <tbody>
            {data.map((item, index) => (
                <TableItem key={index} item={item} />
            ))}
        </tbody>
        </table>
    )
}