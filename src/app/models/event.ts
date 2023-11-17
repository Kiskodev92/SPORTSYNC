export class Event {
    
    constructor(
        public id_usuario:number,
        public desporte_id: number,
        public titulo: string,
        public fecha: number,
        public foto: string,
        public descripcion: string,
        public id_eventos?: number,
       
    ){}
}
