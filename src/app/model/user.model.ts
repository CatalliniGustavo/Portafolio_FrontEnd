export class user {
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    titulo: String;
    img: String;
    banner: String;
    acerca: String;

    constructor(nombre: String, 
        apellido: String, 
        email: String, 
        titulo: string, 
        img: String,  
        banner: String, 
        acerca: String
        ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.titulo = titulo;
        this.img = img;
        this.banner = banner;
        this.acerca = acerca;
    }
}