import { WELCOME_FEATURES } from "@/app/constants/modals";

export function ChartIcon({ path }: { path: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-6 text-green-100"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d={path} 
            />
        </svg>
    );
}

export default function WelcomeModalContent() {
    return (
       <div className="flex flex-col bg-green-400 gap-2 p-6 rounded-lg">
            <p className="text-white/50 text-xs font-medium uppercase tracking-wider">¿Qué vas a encontrar?</p>
            <div className="flex items-center justify-between gap-3">
                {WELCOME_FEATURES.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <ChartIcon path={item.iconPath} />
                            <p className="text-white text-sm font-normal">{item.title}</p>
                        </div>
                        <p className="text-sm font-normal text-gray-500">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}