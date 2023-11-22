import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/shared/eventos.service';
import { UsEvent } from 'src/app/models/us-event';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() event: Event;

  @Input() user: Event;
  stafol: boolean = false;

  constructor(private usevent: EventosService){}
 
  btnClick(id_usuario: number, id_evento){

    this.usevent.btnFollow(new UsEvent(0, id_usuario, id_evento)).subscribe((data:any) =>{
      console.log(data);
      
    })
  }
 
 
 
 
  public btnfol(){

    this.stafol = !this.stafol;
  }
}
