import { useState } from 'react';

interface SelectorProps {
    options: { label: string; value: string }[];
    selected: string;
    onChange: (value: any) => void;
}

export default function Selector({
    options,
    selected,
    onChange
}: SelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    const selectedOption = options.find(option => option.value === selected);

    const onChangeOption = (value: string) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full h-[56px] py-4 pl-3 pr-4 bg-green-400 text-white rounded-lg cursor-pointer hover:bg-green-500 transition-colors"
            >
                <span className="text-sm font-medium">
                    {selectedOption?.label || 'Seleccionar...'}
                </span>
                <svg 
                    className={`size-5 text-green-100 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-green-400 rounded-lg shadow-lg border border-green-300 z-10">
                    {options.map(option => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChangeOption(option.value)}
                            className={`py-4 pl-3 pr-4 w-full text-left text-sm text-white hover:bg-green-500 transition-colors first:rounded-t-lg last:rounded-b-lg cursor-pointer ${
                                selected === option.value ? 'bg-green-500' : ''
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
} 