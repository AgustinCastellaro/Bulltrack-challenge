interface ButtonGroupProps {
    options: { icon: string; value: string }[];
    selected: string;
    onChange: (value: any) => void;
}

export function ButtonGroup({
    options,
    selected,
    onChange
}: ButtonGroupProps) {
    return (
        <div className="inline-flex" role="group">
            {options.map((option, index) => {
                const isFirst = index === 0;
                const isLast = index === options.length - 1;
                
                let roundedClass = '';
                if (isFirst && isLast) {
                    roundedClass = 'rounded-xl';
                } else if (isFirst) {
                    roundedClass = 'rounded-l-xl';
                } else if (isLast) {
                    roundedClass = 'rounded-r-xl';
                }

                return <button
                    key={option.value}
                    type="button"
                    onClick={() => onChange(option.value)}
                    className={`py-2 px-6 text-white text-xs font-semibold ${roundedClass} hover:bg-gray-400 transition-colors cursor-pointer ${
                        selected === option.value 
                        ? "bg-gray-300" 
                        : "bg-gray-50 text-gray-900"
                    }`}
                >
                    {
                        option.icon && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 ${selected === option.value ? "text-white" : "text-gray-300 hover:text-white"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={option.icon} />
                        </svg>
                    }
                </button>
            })}
        </div>
    )
}