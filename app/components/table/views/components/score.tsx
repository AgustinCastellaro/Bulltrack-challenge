import { useDataStore } from "@/app/store/data.slice";
import { useUIStore } from "@/app/store/ui.slice";

interface ScoreProps {
    bull_score: number;
    feature: string | null;
}

export default function Score({ bull_score, feature }: ScoreProps) {
    const { view } = useUIStore();

    return (
        <div className="flex flex-col gap-2">
            <p className="flex items-center justify-between text-gray-300 uppercase">
                <span className="text-sm font-medium">bull Score</span>
                <span className="text-2xl font-semibold tracking-wider">{bull_score / 100}</span>
            </p>
            <div className={`${view === "list" ? "w-[400px]" : "w-full"} h-2 bg-gray-200 rounded-full overflow-hidden`}>
                <div 
                    className="h-full bg-green-100 rounded-full"
                    style={{ width: `${bull_score}%` }}
                ></div>
            </div>
            { feature && <p className="text-gray-300 text-base font-normal">{feature}</p> }
        </div>
    );
}