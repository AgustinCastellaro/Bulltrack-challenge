import Button from "../../button";

export default function ContainerHeader() {
    return (
        <>
            <div className="flex items-center gap-2 mb-6">
                <img src="/icons/cloud-sync.svg" alt="updated data" className="w-4" />
                <p className="text-sm font-normal">Datos actualizados hace 2 min</p>
            </div>
            <div className="flex items-start justify-between">
                <div className="text-2xl font-bold mb-4 flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold text-gray-300">Resultados de la clasificación</h1>
                    <p className="text-base font-normal text-gray-300">Los resultados están ordenados por Bulltrack Score que reflejan tus objetivos de producción</p>
                </div>
                <Button 
                    text='Exportar'
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    }
                    onChange={() => {}}
                />
            </div>
        </>
    )
}