import { Component } from '@angular/core';
import { IEvento } from '../interfaces';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eventos: (IEvento)[] = [];

  constructor(private _eventoService : EventoService) {}

  ngOnInit() {
    let ref = this._eventoService.getEventos();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        value.id = child.key;
        this.eventos.push(value);

        console.log("He encontrado "+ child.val().nombre);
        
      })
    })
  }
}
