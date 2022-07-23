export class Hduras {

    id?: number;
    imgIcono: string;
    nombre: string;
    progreso: number;
    tiempoexpe: number;

    constructor(imgIcono: string, nombre: string, progreso: number, tiempoexpe: number) {
        this.imgIcono = imgIcono;
        this.nombre = nombre;
        this.progreso = progreso;
        this.tiempoexpe = tiempoexpe;
    }
}
