import { DataItem } from "@/app/types/data";
import Image from "./image";
import Information from "./information";
import Score from "./score";
import Actions from "./actions";
import RadarChart from "@/app/components/radar-chart";
import Checkbox from "@/app/components/checkbox";

interface ListItemProps {
    item: DataItem;
    index: number;
}

export default function ListItem({ item, index }: ListItemProps) {
    return (
        <div className="py-6 px-6 bg-white rounded-3xl flex justify-between items-center gap-3">
            <Checkbox checked={false} onClick={() => {}} color={"[#4E61F6]"} />
            
            <p className='text-green-500 text-3xl font-semibold'>#{index + 1}</p>
            
            <Image image={item.image} name={item.nombre} />
            
            <Information 
                nombre={item.nombre}
                caravana={item.caravana}
                raza={item.raza}
                edad_meses={item.edad_meses}
                origen={item.origen}
                uso={item.uso}
            />
            
            <div className="w-px h-36 bg-gray-500"></div>
            
            <Score 
                bull_score={item.bull_score}
                feature={item.caracteristica_destacada}
            />

            <RadarChart data={item} />
            
            <div className="w-px h-36 bg-gray-500"></div>
            
            <Actions id={item.id.toString()} />
        </div>
    );
}