import { Component } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {

  public home: Event[] = []

  constructor(private eventService: EventosService){

    this.eventService.getEventos().subscribe((data:any) =>{
      console.log(data.data);
      this.home = data.data
    })
  }

  buscar(titulo):void{
    
    if(titulo != 0){
      console.log('evento uno');
      
      this.eventService.getOne(titulo).subscribe((data:any) =>{
        console.log(data);
        this.home = data.data
      })
    }else{
      console.log('evento todos');

      this.eventService.getEventos().subscribe((data:any) =>{
        console.log(data);
        this.home = data.data
      })
    }

  }
}