import Image from "./image";
import Score from "./score";
import Actions from "./actions";
import Badge from "@/app/components/badge";
import { DataItem } from "@/app/types/data";
import RadarChart from "@/app/components/radar-chart";

export default function TableItem({ item }: {  item: DataItem }) {
    return (
        <tr key={item.id} className="border-t border-gray-500 hover:bg-gray-50">
            <td className="p-2">{item.id}</td>
            <td className="p-2">
                <Image image={item.image} name={item.nombre} />
            </td>
            <td className="p-2">
                <p className="flex flex-col g-2 text-base text-gray-300">
                    <span className="text-2xl font-semibold">{item.nombre} #{item.caravana}</span>
                    <span className="font-medium">{item.raza} . {item.edad_meses} meses</span>
                </p>
            </td>
            <td className="p-2">
                <div className="flex flex-wrap gap-2 align-start">
                    <Badge text={item.origen} color="var(--color-green-100)" />
                    <Badge text={`para ${item.uso}`} color="var(--color-blue-100)" />
                </div>
            </td>
            <td className="p-2">
                <Score 
                    bull_score={item.bull_score}
                    feature={item.caracteristica_destacada}
                />
            </td>
            <td className="p-2">
                <RadarChart data={item} />
            </td>
            <td className="p-2">
                <Actions id={item.id.toString()} />
            </td>
        </tr>
    )
}