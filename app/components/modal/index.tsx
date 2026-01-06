import { useModalStore } from "@/app/store/modal.slice";

interface ModalProps {
    children: React.ReactNode;
    isOpen?: boolean;
}

export default function Modal({ children, isOpen = false }: ModalProps) {
    const { closeModal } = useModalStore();

    if (!isOpen) return null;
    
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen z-[1000] flex items-center justify-center p-6`}>
            <div className={`z-[1001]`}>
                {children}
            </div>
            <div className={`absolute top-0 right-0 w-full h-full bg-black opacity-35 cursor-pointer`} onClick={closeModal} title="Cerrar" />
        </div>
    )
}