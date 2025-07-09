export interface Product{
    nombre: string;
    descripcion: string;
    image: string;
    precio: number;
    promo: boolean;
    cantidad: number;
    stock: number;
    tipo: 'pizza' | 'empanada' | 'bebida' | 'tarta' | 'guarnicion' | 'sanguche';
    tags: string;
}