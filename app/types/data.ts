export interface DataItem {
    id: number;
    caravana: string;
    nombre: string;
    image: string;
    bull_score: number;
    uso: string;
    origen: string;
    pelaje: string;
    raza: string;
    edad_meses: number;
    caracteristica_destacada: string | null;
    stats: {
        crecimiento: number;
        facilidad_parto: number;
        reproduccion: number;
        moderacion: number;
        carcasa: number;
    }
}