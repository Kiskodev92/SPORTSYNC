import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {

  constructor( private eventService: EventosService){

  }

  callevento( titulo: string, fecha: number, descripcion: string, foto: string,){
    console.log("Estoy dentro de calleventos");
    
    this.eventService.postEvent( new Event(titulo,fecha,descripcion,foto)).subscribe((data: any) =>{
      console.log(data);
    })

  }

}
