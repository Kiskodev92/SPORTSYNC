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

  public user: User

  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
   this.user = new User(
                                  this.user.id_user,
                                  this.user.nombre, 
                                  this.user.usuario = null,
                                  this.user.email = null,
                                  this.user.password = null,
                                  this.user.provincia, 
                                  this.user.descripcion, 
                                  this.user.foto 
                              );
  }

  editar() {
    if (this.user) {
      this.userService.editPerfil(this.user).subscribe(() => {
          console.log('Perfil actualizado con éxito');
          this.router.navigate(['/perfil']);
        });
    } else {
      console.error('Usuario no definido. No se puede actualizar el perfil.');
    }
  }

  cancelarPerfil(){
      this.router.navigate(['/perfil']);
}
}
