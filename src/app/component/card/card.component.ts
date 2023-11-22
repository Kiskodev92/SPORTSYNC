import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() event: Event;

  @Input() user: Event;
  stafol: boolean = false;
  public btnfol(){
    this.stafol = !this.stafol;
  }
}
