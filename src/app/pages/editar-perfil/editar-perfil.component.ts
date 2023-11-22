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

  public user: User = new User(0, '', '', '', '', '', '', '');

  constructor(private userService: UserService, public router: Router) { }


  editar() {
  
      this.userService.editPerfil(this.user).subscribe(() => {
          console.log('Perfil actualizado con éxito');
          this.router.navigate(['/perfil']);
        })
  }

  cancelarPerfil(){
      this.router.navigate(['/perfil']);
}
}
