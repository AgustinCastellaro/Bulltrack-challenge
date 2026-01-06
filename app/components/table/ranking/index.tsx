import { useState } from "react";
import RankingHeader from "./components/rankingHeader";
import RankingContent from "./components/rankingContent";

export default function TableRanking() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col w-full bg-gray-200 rounded-lg">
            <RankingHeader open={open} setOpen={setOpen} />
            <RankingContent open={open} />
        </div>
    )
}