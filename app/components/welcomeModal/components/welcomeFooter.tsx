import { useState } from "react";
import Checkbox from "../../checkbox";
import { useModalStore } from "../../../store/modal.slice";
import Button from "../../button";

export default function WelcomeModalFooter() {
    const { closeModal, setDontShowAgain } = useModalStore();
    const [dontShowAgain, setLocalDontShowAgain] = useState(false);

    const handleClose = () => {
        if (dontShowAgain) setDontShowAgain();
        closeModal();
    };

    return (
        <div className="flex items-center justify-between gap-2">
            <Checkbox 
                text="No volver a mostrar este mensaje"
                checked={dontShowAgain}
                onClick={() => setLocalDontShowAgain(!dontShowAgain)}
            />
            <Button 
                text="Ver ranking"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-green-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                }
                onChange={handleClose}
                type="secondary"
            />
        </div>
    )
}