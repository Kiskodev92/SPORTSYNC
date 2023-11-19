import { Component, OnInit } from '@angular/core';
import { Deporte } from 'src/app/models/deporte';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register-deporte',
  templateUrl: './form-register-deporte.component.html',
  styleUrls: ['./form-register-deporte.component.css']
})
export class FormRegisterDeporteComponent {

  public deporte: Deporte;
  public deporteForm: FormGroup;

  constructor(public userService: UserService, public router: Router,  private formBuilder: FormBuilder,) {}

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
      const selectedDeportes: string[] = Object.keys(this.deporteForm.value)
        .filter(key => this.deporteForm.value[key]);
  
      const deporteData: Deporte = { deporte: selectedDeportes };
  
      this.userService.registerDeport(deporteData).subscribe(() => {
        console.log('Deportes registrados correctamente');
        this.router.navigateByUrl('/login');
      });
    } else {
      console.log('Error al guardar datos del deporte');
    }
  }

  }  