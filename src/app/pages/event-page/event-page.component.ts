import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {


  constructor( private eventService: EventosService, private router : Router){
   
  }

  callevento(id_usuario:number, id_deporte:number, titulo: string, fecha: number, descripcion: string, foto: string,){
    console.log("Estoy dentro de calleventos");
    
    this.eventService.postEvent( new Event(id_usuario,id_deporte,titulo,fecha,descripcion,foto)).subscribe((data: any) =>{
      console.log(data);
      
    })
    // this.router.navigateByUrl("/")
  }

}
