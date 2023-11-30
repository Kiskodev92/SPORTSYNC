import { Component, OnInit } from '@angular/core';
import { Deporte } from 'src/app/models/deporte';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usdep } from 'src/app/models/usdep';
import { EventosService } from 'src/app/shared/eventos.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register-deporte',
  templateUrl: './form-register-deporte.component.html',
  styleUrls: ['./form-register-deporte.component.css']
})
export class FormRegisterDeporteComponent {
  
  public deporte: Deporte;
  public deporteForm: FormGroup;

  constructor(public userService: UserService, public router: Router, private formBuilder: FormBuilder, public eventService: EventosService) {}
  
  obtenerValoresSeleccionados() {
    const valoresSeleccionados = Object.entries(this.deporteForm.value)
      .filter(([key, value]) => value)
      .map(([key, value]) => key);
  
    console.log(valoresSeleccionados);
  }
    ngOnInit() {
    
      this.deporteForm = this.formBuilder.group({
        futbol: [false],
        baloncesto: [false],
        volley: [false],
        patinaje: [false],
        natacion: [false],
        running: [false],
        ciclismo: [false],
      }, { validators: [this.OneSelectedValidator] });
    }
    
    private OneSelectedValidator(group: FormGroup) {
      const values = Object.values(group.value);
      return values.includes(true) ? null : { OneSelected: true };
    }

    register() {

    
      if (this.deporteForm.valid) { 
        
        this.userService.postUsdep(new Usdep(0, this.userService.user.id_user, this.userService.deporte.id_deporte)).subscribe(() => {
          console.log('Deportes registrados correctamente');
          
        });
        this.router.navigateByUrl('/login');
      }
    } 
  }


  
