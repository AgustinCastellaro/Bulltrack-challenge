import { DataItem } from "@/app/types/data";
import Badge from "../../badge";

export default function StatsModalHeader({ row }: { row: DataItem }) {
    return (
        <div className="flex flex-col items-start w-full gap-3.5">
            <Badge 
                text="Top 5%" 
                color="var(--color-green-100)" 
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                }
            />
            <p className="flex justify-between items-center w-full text-white text-xl font-semibold">
                <span>Bulltrack score</span>
                <span className="text-3xl text-green-100">{row.bull_score}</span>
            </p>
        </div>
    )
}