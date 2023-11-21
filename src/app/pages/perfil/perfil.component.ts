import { Component } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

    
  public home: Event[] = []

  public mostrarBtnMisEventos: boolean = true

  public mostrarMisSeguidos: boolean = false

  constructor(private eventService: EventosService){
   
   
     this.eventService.getEventos().subscribe((data:any) =>{
       console.log(data.data);
       this.home = data.data
     })
  }
 
  mostrarEvent(){
    this.mostrarBtnMisEventos = true
    this.mostrarMisSeguidos = false
  }

  mostrarSeguido(){
    this.mostrarBtnMisEventos = false
    this.mostrarMisSeguidos = true
  }

  
}
