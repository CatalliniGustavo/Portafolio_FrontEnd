export class Hblandas {

    id?: number;
    imgIcono: string;
    nombre: string;
    tiempoexpe: number;
    progreso: number;

    constructor(imgIcono: string, nombre: string, tiempoexpe: number, progreso: number) {
        this.imgIcono = imgIcono;
        this.nombre = nombre;
        this.tiempoexpe = tiempoexpe;
        this.progreso = progreso;
    }
}
