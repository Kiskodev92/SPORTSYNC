export class User {

    public id_user: number;
    public nombre: string;
    public usuario: string;
    public email: string;
    public password: string;
    public provincia: string;
    public descripcion: string;
    public foto: string;

    constructor (id_user: number, nombre: string, usuario: string, email: string, password: string, provincia: string, descripcion: string, foto: string){

        this.id_user = id_user;
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.password = password;
        this.provincia = provincia;
        this.descripcion = descripcion;
        this.foto = foto;
    }

}
