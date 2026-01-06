import Badge from "../../../badge";

interface InformationProps {
    nombre: string;
    caravana: string;
    raza: string;
    edad_meses: number;
    origen: string;
    uso: string;
}

export default function Information({ 
    nombre, 
    caravana, 
    raza, 
    edad_meses, 
    origen, 
    uso 
}: InformationProps) {
    return (
        <div className="flex flex-col gap-4">
            <p className="flex flex-col g-2 text-base text-gray-300">
                <span className="text-2xl font-semibold">{nombre} #{caravana}</span>
                <span className="font-medium">{raza} . {edad_meses} meses</span>
            </p>
            <div className="flex flex-wrap gap-2 align-start">
                <Badge text={origen} color="var(--color-green-100)" />
                <Badge text={`para ${uso}`} color="var(--color-blue-100)" />
            </div>
        </div>
    );
}