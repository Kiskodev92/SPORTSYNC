import { Component, OnInit } from '@angular/core';
import { Deporte } from 'src/app/models/deporte';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-register-deporte',
  templateUrl: './form-register-deporte.component.html',
  styleUrls: ['./form-register-deporte.component.css']
})
export class FormRegisterDeporteComponent {

  public deporte: Deporte;
  public deporteForm: FormGroup;

  constructor(public userService: UserService, public router: Router,  private formBuilder: FormBuilder,) {
  
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
    });
  }

    register() {
      const selectedDeportes: string[] = [];
    
      Object.keys(this.deporteForm.getRawValue()).forEach(key => {
        if (this.deporteForm.get(key).value) {
          selectedDeportes.push(key);
        }
      });
    
      if (selectedDeportes.length > 0) {
        const deporte = new Deporte(selectedDeportes.join(', '));
    
        this.userService.registerDeport(deporte).subscribe(() => {
          console.log("Deporte Registrado Correctamente");
          this.router.navigate(['/login']);
        });
      } else {
        console.log("Por favor, selecciona al menos un deporte.");
      }
    }
  }  