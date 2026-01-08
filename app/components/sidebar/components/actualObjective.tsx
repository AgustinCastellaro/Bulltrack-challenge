import Button from "../../button";

export function ActualObjective() {
    return (
        <div className="flex flex-col gap-2 p-4 bg-green-400 rounded-lg">
            <p className="text-sm font-semibold text-white">Objetivo actual</p>
            <p className="text-sm font-light text-white mb-2">
                Maximizar la ganancia de peso (destete)<br /> manteniendo facilidad de parto.
            </p>
            <Button 
                position="right"
                text="Editar criterios"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                }
                onChange={() => {}}
                type="secondary"
            />
        </div>
    )
}