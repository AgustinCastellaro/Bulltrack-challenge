import { DataItem } from "@/app/types/data"

export default function StatsModalContent({ row }: { row: DataItem }) {
    return (
        <div className="flex flex-col gap-2.5">
            {row.stats && Object.entries(row.stats).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <p className="text-white text-base font-normal capitalize">{key.replace("_", " ")}</p>
                        <p className="text-white text-sm font-medium tracking-wider uppercase">{value}</p>
                    </div>
                    <div className="max-w-full w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                            className={`h-full rounded-full ${key === "crecimiento" || key === "carcasa" ? 'bg-yellow-100' : 'bg-green-600'}`}
                            style={{ width: `${value}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}