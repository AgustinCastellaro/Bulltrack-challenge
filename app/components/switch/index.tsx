interface SwitchProps {
    checked: boolean;
    onChange: (value: boolean) => void;
}

export function Switch({
    checked,
    onChange
}: SwitchProps) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={`relative flex w-11 h-6 items-center rounded-full transition-colors duration-200 ease-in-out outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 ${checked ? 'bg-green-500' : 'bg-black'}`}
        >
            <span className={`inline-block w-5 h-5 transform rounded-full bg-green-100 transition-transform duration-200 ease-in-out ${checked ? 'translate-x-6' : 'translate-x-1'}`}/>
        </button>
    )
}