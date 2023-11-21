import { Component } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Deporte } from 'src/app/models/deporte';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  
    
  public eventPerfil: Event[] = []

  mostrarContenido: number = 1

  public user: User

  public deporte: Deporte

  constructor(private eventService: EventosService, private userService: UserService){
    

    this.user  = new User(0,"Carol","", "", "","","desde pequeña me gusta el deporte y lo que mas practico es la escalada","https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")

    this.deporte = new Deporte('escalada , natacion')

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
  }
  
}
