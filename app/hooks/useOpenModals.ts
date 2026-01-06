import { useModalStore } from "../store/modal.slice";

export function useOpenModals() {
    const { open, type, dontShowAgain, hasHydrated } = useModalStore();
    
    const openWelcomeModal = hasHydrated && open && type === "welcome" && !dontShowAgain
    
    const openStatsModal = open && type === "stats"

    return {
        openWelcomeModal,
        openStatsModal,
    }
}