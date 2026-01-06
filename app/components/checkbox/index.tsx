interface CheckboxProps {
    text?: string;
    checked: boolean;
    onClick: () => void;
    color?: string;
}

export default function Checkbox({
    text,
    checked,
    onClick,
    color = "gray-500"
}: CheckboxProps) {
    return (
        <div className="flex items-center gap-2">
            <div 
                className={`relative w-6 h-6 border-1 border-${color} rounded-lg cursor-pointer flex items-center justify-center`}
                onClick={onClick}
            >
                {checked && (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className={`size-4 text-${color}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                )}
            </div>
            <p className={`text-${color} font-normal text-sm`}>{text}</p>
        </div>
    )
}