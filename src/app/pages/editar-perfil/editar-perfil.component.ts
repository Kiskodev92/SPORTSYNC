import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {

 public user: User = new User(null, '', null, null, null, '', '', '');

  constructor(private userService: UserService, public router: Router) { }

  editar(nombre: string, provincia: string, descripcion: string, foto: string) {

      this.user.nombre = nombre;
      this.user.provincia = provincia;
      this.user.descripcion = descripcion;
      this.user.foto = foto;
      
    this.userService.editPerfil(this.user).subscribe(() => {
        console.log('Perfil actualizado con éxito');
        this.router.navigate(['/perfil']);
      });
}

  cancelarPerfil(){
      this.router.navigate(['/perfil']);
}
}
