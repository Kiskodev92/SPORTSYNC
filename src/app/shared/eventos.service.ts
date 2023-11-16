import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url: string = 'http://localhost:3000/home'
  private url2: string = 'http://localhost:3000/explore'


  constructor( private http: HttpClient){

  }

  getEventos(){
    return this.http.get(this.url)
  }

  getOne(titulo:string){
    return this.http.get(`${this.url2}?titulo=${titulo}`)
  }
}
