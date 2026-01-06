interface AttributeProgressBarProps {
    label: string;
    percentage: number;
}

function AttributeProgressBar({ label, percentage }: AttributeProgressBarProps) {
    return (
        <div className="flex flex-col gap-2">
            <p className="flex items-center justify-between text-gray-300">
                <span className="text-base font-normal">{label}</span>
                <span className="text-sm font-medium tracking-wider">{percentage}%</span>
            </p>
            <div className="h-2 bg-white rounded-full overflow-hidden">
                <div 
                    className="h-full bg-green-100 rounded-full"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}

export default function AttributeWeightsSection() {
    const attributes = [
        { label: 'Crecimiento', percentage: 50 },
        { label: 'Habilidad materna', percentage: 40 },
        { label: 'Fertilidad', percentage: 30 },
    ];

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm font-normal text-gray-300 uppercase">peso de atributos</p>
            <div className="flex flex-col gap-3">
                {attributes.map((attribute, index) => (
                    <AttributeProgressBar
                        key={index}
                        label={attribute.label}
                        percentage={attribute.percentage}
                    />
                ))}
            </div>
        </div>
    );
}