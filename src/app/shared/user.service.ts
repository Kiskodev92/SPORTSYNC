import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Deporte } from '../models/deporte';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000";
  private urlperfil = "http://localhost:3000/perfil";
  private urlper = "http://localhost:3000/perfil2"

  public logueado: boolean
  public user: User;
  public deporte: Deporte;

  constructor(private http: HttpClient) {
     this.logueado = false;
  }
  
    register(user: User){

      return this.http.post(this.url + "/register", user);
    }

    registerDeport(deporte: Deporte){

      return this.http.post(this.url + "/registerDeporte", deporte);
    }
  
    login(user:User){
  
      return this.http.post(this.url + "/login", user);
    }
    editPerfil(update_user:User){
  
      return this.http.put(this.url + "/usuario", update_user);
  
    }

    getProyect(){
      
      return this.http.get(`${this.urlperfil}?id=${this.user.id_user}`)
    }

   };

