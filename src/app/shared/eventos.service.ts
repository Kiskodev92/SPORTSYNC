import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Deporte } from '../models/deporte';
import { UserService } from './user.service';
import { UsEvent } from '../models/us-event';
import { User } from '../models/user';




@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url: string = 'http://localhost:3000/home'
  private url2: string = 'http://localhost:3000/explore'
  private url3: string = 'http://localhost:3000/evento'
  private urlsport: string = 'http://localhost:3000/sport'
  private urlbtn: string = 'http://localhost:3000/btn'
  private urlsportus: string = 'http://localhost:3000/sportus'


  public event: Event

  public user: User

  public deporte: Deporte

  constructor( private http: HttpClient, private userService: UserService){

  }
  getSport(){
    return this.http.get(`${this.urlsport}`);
  }

  postEvent(event: Event){
    console.log("Se ejecuta el post");
    
    return this.http.post(`${this.url3}`,event)
  }

  getEventos(){
    return this.http.get(this.url);
  }

  getOne(titulo:string){
    return this.http.get(`${this.url2}?titulo=${titulo}`)
  }

  btnFollow(UsEvent: UsEvent){
    console.log("Se cambia el boton");

    return this.http.post(`${this.urlbtn}`, UsEvent)
  }

  getSportUs(){

    return this,this.http.get(`${this.urlsportus}?id=${this.userService.user.id_user}`)
  }
}
