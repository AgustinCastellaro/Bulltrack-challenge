interface RadioGroupProps {
    options: { label: string; value: string }[];
    selected: string;
    onChange: (value: any) => void;
}

export default function RadioGroup({
    options = [],
    selected,
    onChange
}: RadioGroupProps) {

    return (
        <div className="space-y-2">
            {options.map((option) => (
                <label 
                    key={option.value} 
                    className={`flex items-center justify-between bg-green-400 border rounded-lg pt-4 pb-4 pr-4 pl-3 cursor-pointer hover:bg-green-500 p-2 ${selected === option.value ? "border-green-100" : "border-transparent"}`}
                >
                    <span className="text-sm font-medium text-white">
                        {option.label}
                    </span>
                    <div className="relative">
                        <input
                            type="radio"
                            name="filter"
                            value={option.value}
                            checked={selected === option.value}
                            onChange={(e) => onChange(e.target.value)}
                            className="sr-only" // Sirve para ocultar el input pero mantener su funcionalidad
                        />
                        <div className={`w-6 h-6 border border rounded-lg flex items-center justify-center ${
                            selected === option.value ? 'border-green-100 bg-green-100' : 'border-green-100'
                        }`}>
                            {selected === option.value && (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    className="size-5 text-green-400"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            )}
                        </div>
                    </div>
                </label>
            ))}
        </div>
    )
}