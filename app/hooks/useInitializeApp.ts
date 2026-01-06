import { useEffect } from "react";
import { useDataStore } from "../store/data.slice";
import { useModalStore } from "../store/modal.slice";

export function useInitializeApp() {
    const { loadData } = useDataStore();
    const { hasHydrated, dontShowAgain, openWelcomeModal } = useModalStore();

    useEffect(() => {
        loadData();
    }, []);

    // Se abre el modal de bienvenida (tipo welcome) al cargar la pagina
    useEffect(() => {
        if (hasHydrated && !dontShowAgain) {
            openWelcomeModal()
        }
    }, [hasHydrated, dontShowAgain]);
}