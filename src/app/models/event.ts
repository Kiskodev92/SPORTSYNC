export class Event {
    
    constructor(
    
        public titulo: string,
        public fecha: number,
        public hora: number,
        public descripcion: string,
        public foto: string,
        public id_eventos: number,
        public id_usuario:number,
        public deporte_id: number
    ){}
}
