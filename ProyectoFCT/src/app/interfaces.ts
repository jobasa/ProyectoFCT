export interface IEvento{
    //cada vez que creo un objeto asociado a la interfaz IEvento el id es opcional
    id?: any,
    nombre: string;
    lugar: string;
    fecha: string;
    img: string;
}