export class Event {
    
    constructor(
    
        public titulo: string,
        public fecha: number,
        public descripcion: string,
        public foto: string,
        public id_deporte?: number,
        public id_usuario?:number,
        public id_eventos?: number,
    ){}
}
