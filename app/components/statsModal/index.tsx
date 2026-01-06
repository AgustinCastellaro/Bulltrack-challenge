import Modal from "../modal";
import StatsModalHeader from "./components/statsHeader";
import StatsModalContent from "./components/statsContent";
import { useSelectedBull } from "@/app/hooks/useSelectedBull";
import { useOpenModals } from "@/app/hooks/useOpenModals";

export default function StatsModal(){
    const { openStatsModal } = useOpenModals();
    const { selectedBull } = useSelectedBull()

    if(!selectedBull) return null
    
    return (
        <Modal isOpen={openStatsModal}>
            <div className="p-8 rounded-3xl max-w-90 w-full flex flex-col gap-8 bg-gray-400 shadow-[2px_4px_32px_8px_#2F2F2F3D]">
                <StatsModalHeader row={selectedBull} />
                <StatsModalContent row={selectedBull} />
                <p className='text-white text-sm font-normal leading-5'>
                    <strong>Excelente desempeño.</strong> Este toro supera el promedio de ganancia diaria en un 50%, ideal para mejorar el peso al destete en su descendencia.
                </p>
            </div>
        </Modal>
    )
}