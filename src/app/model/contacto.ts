export class Contacto {

    id?: number;
    imgIcono: string;
    linkIcono: string;
    nombre: string;
    enlace: string;

    constructor(imgIcono: string, linkIcono: string, nombre: string, enlace: string) {
        this.imgIcono = imgIcono;
        this.linkIcono = linkIcono;
        this.nombre = nombre;
        this.enlace = enlace;
    }
}

