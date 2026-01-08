import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import type { DataItem } from '@/app/types/data';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface RadarChartProps {
    data: DataItem;
    className?: string;
}

export default function RadarChart({ data, className = '' }: RadarChartProps) {
    const chartData = {
        labels: ['', '', '', '', ''],
        datasets: [
            {
                
                data: [
                    data.stats.crecimiento,
                    data.stats.facilidad_parto,
                    data.stats.reproduccion,
                    data.stats.moderacion,
                    data.stats.carcasa
                ],
                backgroundColor: 'rgba(54, 226, 123, 0.30)',
                borderColor: '#36E27B',
                borderWidth: 2,
                pointBackgroundColor: '#36E27B',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#36E27B',
            }
        ],
    };

    const options: ChartOptions<'radar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 8,
                displayColors: true,
                callbacks: {
                    title: function(context) {
                        const labels = ['Crecimiento', 'Facilidad Parto', 'Reproducción', 'Moderación', 'Carcasa'];
                        return labels[context[0].dataIndex];
                    },
                    label: function(context) {
                        return `Valor: ${context.parsed.r}`;
                    }
                }
            }
        },
        scales: {
            r: { // Escala radial
                grid: {
                    color: '#e5e7eb',
                },
                ticks: {
                    display: false,
                    stepSize: 20
                },
                suggestedMin: 0, // Valor minimo sugerido
                suggestedMax: 100, // Valor maximo sugerido
                beginAtZero: true // Obliga al grafico a comenzar en 0
            },
        },
        elements: { // Estilos para los puntos y lineas del grafico
            point: {
                radius: 4,
                hoverRadius: 6,
            },
        },
    };

    return (
        <div className={`w-30 h-30 ${className}`}>
            <Radar data={chartData} options={options} />
        </div>
    );
}