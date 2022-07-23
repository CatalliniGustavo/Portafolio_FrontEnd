export class Redes {

    id?: number;
    imgIcono: string;
    linkIcono: string;
    nombre: string;

    constructor(imgIcono: string, linkIcono: string, nombre: string) {
        this.imgIcono = imgIcono;
        this.linkIcono = linkIcono;
        this.nombre = nombre;
    }
}
