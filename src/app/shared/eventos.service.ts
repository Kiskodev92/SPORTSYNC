import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url: string = 'http://localhost:3000/home'
  private url2: string = 'http://localhost:3000/explore'
  private url3: string = 'http://localhost:3000/evento'


  constructor( private http: HttpClient){

  }
  postEvent(event: Event){
    console.log("Se ejecuta el post");
    
    return this.http.post(this.url3,event);
  }
  getEventos(){
    return this.http.get(this.url);
  }

  getOne(titulo:string){
    return this.http.get(`${this.url2}?titulo=${titulo}`)
  }
}
