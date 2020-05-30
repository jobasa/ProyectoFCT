import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { IEvento } from '../interfaces';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {
  id: string;
  evento: IEvento = {
    fecha: "",
    img: "",
    lugar: "",
    nombre: "",
  };

  constructor(private _activatedRoute: ActivatedRoute, private _eventoService: EventoService) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    let ref = this._eventoService.getEvento(this.id);

    ref.once("value", snapshot => {
      //Guarda el elmento asociado al id que le he pasado por la url.
      let value = snapshot.val();
      console.log(value);

      this.evento = value;
    })

  }

}
