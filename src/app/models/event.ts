export class Event {
    
    constructor(
    
        public titulo: string,
        public fecha: number,
        public foto: string,
        public descripcion: string,
        public hora?: number,
        public id_eventos?: number,
        public id_usuario?:number,
        public desporte_id?: number
    ){}
}
