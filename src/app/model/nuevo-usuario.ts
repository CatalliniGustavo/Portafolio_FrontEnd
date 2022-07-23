export class NuevoUsuario {
    nombre: string;
    email: string;
    apellido: string;
    password: string;
    authorities!: string[];

    constructor (nombre: string, email: string, apellido: string, password: string){
        this.nombre = nombre;
        this.email = email;
        this.apellido = apellido;
        this.password = password;
    }
}
