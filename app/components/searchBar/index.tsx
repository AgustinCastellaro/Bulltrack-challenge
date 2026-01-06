interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    text?: string;
}

export default function SearchBar({
    value,
    onChange,
    text = "Buscar"
}: SearchProps) {
    return (
        <div className="flex items-center bg-white rounded-lg w-full max-w-[500px] pr-6 gap-2">
            <input
                type="text"
                placeholder={text}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-none border-none py-4.5 pl-6 text-base font-normal w-full outline-hidden"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
    )
}