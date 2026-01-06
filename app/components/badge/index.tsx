
interface BadgeProps {
    text: string;
    icon?: React.ReactNode;
    color?: string;
}

export default function Badge({ text, icon, color }: BadgeProps) {
    const style = color ? {
        color,
        borderColor: color,
        backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`
    } : {};

    return (
        <div 
            className={`flex items-center gap-1 w-auto py-1.5 text-xs font-semibold text-gray-300 rounded-xl border-[2px] capitalize ${!color ? 'bg-gray-200 border-gray-400' : ''} ${icon ? 'pl-2 pr-4' : 'px-4'}`}
            style={style}
        >
            {icon && icon}
            {text}
        </div>
    )
}