export class Event {
    
    constructor(
    
        public id_usuario:number,
        public id_deporte: number,
        public titulo: string,
        public fecha: number,
        public foto: string,
        public descripcion: string,
        public id_eventos?: number,
    ){}
}
