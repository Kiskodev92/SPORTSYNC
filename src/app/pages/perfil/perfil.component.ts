import { Component } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Deporte } from 'src/app/models/deporte';
import { UsEvent } from 'src/app/models/us-event';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  
    
  public eventPerfil: Event[] = []

  mostrarContenido: number = 1

  public user: User;

  public deporte: Deporte[];

  public event : Event

  public perfil: Event[] = []


  constructor(public eventService: EventosService, private userService: UserService){
    
    this.user = this.userService.user

    this.event = this.eventService.event

    console.log(this.user);
    


    this.userService.getProyect().subscribe((data:any) =>{
      console.log(data);
      
      this.eventPerfil = data
    })

   

  }
 
  mostrarContenido1(){

    this.mostrarContenido = 1
  }

   
  mostrarContenido2(){

    this.mostrarContenido = 2
       
    this.userService.getSeguidos().subscribe((data: any) =>{
      console.log(data);
      this.perfil = data
    })
      
  }

  
  
}
