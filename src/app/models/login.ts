export class Login {

    public id_usuario: string;
    public usuario: string;
    public password: string;
    

    constructor (id_usuario: string, usuario: string, password: string){

        this.id_usuario = id_usuario;
        this.usuario = usuario;
        this.password = password;
        
    }
}