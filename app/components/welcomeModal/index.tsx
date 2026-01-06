import Modal from "../modal";
import WelcomeModalHeader from "./components/welcomeHeader";
import WelcomeModalContent from "./components/welcomeContent";
import WelcomeModalFooter from "./components/welcomeFooter";
import { useOpenModals } from "@/app/hooks/useOpenModals";

export default function WelcomeModal() {
    const { openWelcomeModal } = useOpenModals();
    
    return (
        <Modal isOpen={openWelcomeModal}>
            <div className="h-109 p-6 rounded-3xl max-w-216 w-full flex flex-col justify-end gap-6 bg-gradient-to-b from-[#5BF8AA] from-[-30%] via-[#2D3C35] to-[#191E1C] shadow-[2px_4px_32px_8px_#2F2F2F3D]">
                <WelcomeModalHeader />
                <WelcomeModalContent />
                <WelcomeModalFooter />
            </div>
        </Modal>
    )
}