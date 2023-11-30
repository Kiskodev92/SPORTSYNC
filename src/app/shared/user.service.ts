import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Deporte } from '../models/deporte';
import { Usdep } from '../models/usdep';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000";
  private urlperfil = "http://localhost:3000/perfil";
  private urlper = "http://localhost:3000/perfil4";
  private urlper2 = "http://localhost:3000/perfil2"


  public logueado: boolean
  public user: User;
  public deporte: Deporte;
  public idRegistro: number;

  constructor(private http: HttpClient) {
     this.logueado = false;
  }
  
    register(user: User){

      return this.http.post(this.url + "/register", user);
    }

    postUsdep(usdep: Usdep){

      return this.http.post(this.url + "/registerUsdep", usdep)
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

    getSeguidos(){

      return this.http.get(`${this.urlper}?id=${this.user.id_user}`)
    }

   };

