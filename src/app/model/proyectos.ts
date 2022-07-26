export class Proyectos {

    id?: number;
    imgIcono: string;
    nombre: string;
    descripcion: string;
    github: string;
    linkProy: string;

    constructor(imgIcono: string, nombre: string, descripcion: string, github: string, linkProy: string) {
        this.imgIcono = imgIcono;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.github = github;
        this.linkProy = linkProy;
    }
}
