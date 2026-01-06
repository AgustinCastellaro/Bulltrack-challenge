import { useMemo } from "react";
import { useDataStore } from "../store/data.slice";
import { useModalStore } from "../store/modal.slice";

export function useSelectedBull() {
    const { data } = useDataStore();
    const { rowSelected: selectedBullId } = useModalStore();

    const selectedBull = useMemo(() => 
        data.find((item) => item.id.toString() === selectedBullId)
    , [selectedBullId, data]);

    return { selectedBull };
}