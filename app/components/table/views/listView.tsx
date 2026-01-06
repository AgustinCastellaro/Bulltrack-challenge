import { DataItem } from "../../../types/data";
import { ListItem } from "./components";

export default function ListView({ data }: { data: DataItem[] }) {
    return (
        <>
            {data.map((item, index) => (
                <ListItem 
                    key={item.id} 
                    item={item} 
                    index={index} 
                />
            ))}
        </>
    );
}