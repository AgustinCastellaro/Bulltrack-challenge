import Modal from '@/app/components/modal';
import RadarChart from '@/app/components/radar-chart';
import type { DataItem } from '@/app/types/data';

interface BullStatsModalProps {
    isOpen: boolean;
    bull: DataItem | null;
    onClose: () => void;
}

export default function BullStatsModal({ isOpen, bull, onClose }: BullStatsModalProps) {
    if (!bull) return null;

    return (
        <Modal isOpen={isOpen}>
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Estadísticas de {bull.nombre}
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Caravana: {bull.caravana} | Score: {bull.bull_score}/10
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        title="Cerrar"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Chart Container */}
                <div className="h-96 mb-6">
                    <RadarChart data={bull} />
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(bull.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">
                                {value}/10
                            </div>
                            <div className="text-sm text-gray-600 capitalize">
                                {key.replace('_', ' ')}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bull Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <span className="font-medium text-gray-700">Raza:</span>
                            <span className="ml-2 text-gray-600">{bull.raza}</span>
                        </div>
                        <div>
                            <span className="font-medium text-gray-700">Origen:</span>
                            <span className="ml-2 text-gray-600">{bull.origen}</span>
                        </div>
                        <div>
                            <span className="font-medium text-gray-700">Edad:</span>
                            <span className="ml-2 text-gray-600">{bull.edad_meses} meses</span>
                        </div>
                        <div>
                            <span className="font-medium text-gray-700">Pelaje:</span>
                            <span className="ml-2 text-gray-600">{bull.pelaje}</span>
                        </div>
                        <div>
                            <span className="font-medium text-gray-700">Uso:</span>
                            <span className="ml-2 text-gray-600">{bull.uso}</span>
                        </div>
                        {bull.caracteristica_destacada && (
                            <div className="md:col-span-1">
                                <span className="font-medium text-gray-700">Destacada:</span>
                                <span className="ml-2 text-gray-600">{bull.caracteristica_destacada}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
}