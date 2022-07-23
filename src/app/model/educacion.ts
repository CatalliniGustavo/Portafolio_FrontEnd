export class Educacion {
    id?: number;
    imgIcono: string = 'https://cdn-icons-png.flaticon.com/512/2201/2201553.png';
    linkIcono: string;
    nombre: string = 'Empresa o Institucion';
    fechainicio: string= '11/11/1111';
    fechafin: string= '11/11/1111';
    lugar: string = 'Pais';
    titulo: string = 'Título de la ocupación';
    descripcion: string = 'Descripción de las tareas realizadas';
    
    constructor(imgIcono: string, linkIcono: string, nombre: string, fechainicio: string, fechafin: string, lugar: string, titulo: string, descripcion: string) {
        this.imgIcono = imgIcono;
        this.linkIcono = linkIcono;
        this.nombre = nombre;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.lugar = lugar;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

}
