export class Proyectos {

    id?: number;
    imgIcono: string;
    nombre: string;
    descripcion: string;
    github: string;

    constructor(imgIcono: string, nombre: string, descripcion: string, github: string) {
        this.imgIcono = imgIcono;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.github = github;
    }
}
