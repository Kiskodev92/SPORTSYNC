import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Deporte } from '../models/deporte';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000";
  public logueado: boolean = false;
  public user: User;
  public deporte: Deporte;

  constructor(private http: HttpClient) {}
  
    register(user:User){

      return this.http.post(this.url + "/register", user);
    }

    registerDeport(deporte: Deporte){

      return this.http.post(this.url + "/registerDeporte", deporte);
    }
  
    login(user:User){
  
      return this.http.post(this.url + "/login", user);
    }
    editPerfil(user:User){
  
      return this.http.put(this.url + "/usuario", user);
  
    }

   };

