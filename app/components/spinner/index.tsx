interface SpinnerProps {
    show: boolean;
    text?: string;
}

export default function Spinner({ 
    show, 
    text 
}: SpinnerProps) {
    
    return (
        <>
            {show && (
                <div className="flex flex-col h-full items-center justify-center gap-4">
                    <svg className="size-7 animate-spin text-green-100" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {text && <p className="mt-2 text-gray-300">{text}</p>}
                </div>
            )}
        </>
    )
}