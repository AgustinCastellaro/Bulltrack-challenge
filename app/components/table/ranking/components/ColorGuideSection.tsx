interface ColorGuideItemProps {
    color: string;
    title: string;
    description: string;
}

function ColorGuideItem({ color, title, description }: ColorGuideItemProps) {
    return (
        <div className="flex items-start gap-2">
            <div className={`w-4 h-4 rounded-full ${color}`} />
            <p className="flex flex-col text-sm text-gray-300">
                <span className="font-semibold">{title}</span>
                <span className="font-normal">{description}</span>
            </p>
        </div>
    );
}

export default function ColorGuideSection() {
    const colorGuideItems = [
        {
            color: 'bg-green-100',
            title: 'Excelente (Top 25%)',
            description: 'Superior al promedio de la raza'
        },
        {
            color: 'bg-yellow-100',
            title: 'Promedio / Normal',
            description: 'Dentro de la desviación estándar (#1)'
        },
        {
            color: 'bg-red-100',
            title: 'Inferior / Alerta',
            description: 'Impacto negativo en el objetivo (Bottom 25%)'
        }
    ];

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm font-normal text-gray-300 uppercase">GUÍA DE COLORES</p>
            <div className="flex flex-col gap-2">
                {colorGuideItems.map((item, index) => (
                    <ColorGuideItem
                        key={index}
                        color={item.color}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}