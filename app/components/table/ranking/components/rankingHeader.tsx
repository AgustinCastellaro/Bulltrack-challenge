export default function RankingHeader({ open , setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {

    return (
        <div className="flex items-center gap-2 text-gray-300 rounded-lg py-4 px-5 hover:bg-gray-500 cursor-pointer" onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <p className="text-base font-bold mr-auto">Criterios del ranking</p>
            <svg 
                className={`size-5 transition-transform ${open ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
        </div>
    )
}