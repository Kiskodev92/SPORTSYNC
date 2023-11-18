import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Deporte } from 'src/app/models/deporte';
import { Event } from 'src/app/models/event';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
  
  public dataList: Deporte[] = [];

  constructor( private eventService: EventosService, private router : Router){
     
    this.eventService.getSport().subscribe((data:any)=>{
      console.log(data);
      this.dataList = data.data
      
    })
  }


  
  


  callevento( id_usuario: number, id_deporte:number,titulo: string, fecha: number, descripcion: string, foto: string,){
  
    this.eventService.postEvent( new Event(id_usuario,id_deporte,titulo,fecha,descripcion,foto)).subscribe((data: any) =>{
      console.log(data);
      
    })
     this.router.navigateByUrl("/")
  }

}
