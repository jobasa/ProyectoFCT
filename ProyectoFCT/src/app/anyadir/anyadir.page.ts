import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces';
import { EventoService } from '../services/evento.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-anyadir',
  templateUrl: './anyadir.page.html',
  styleUrls: ['./anyadir.page.scss'],
})
export class AnyadirPage implements OnInit {

  nombre: string = "";
  lugar: string = "";
  fecha: string = "";
  img: string = "";


  eventos: (IEvento)[] = [];

  constructor(private _EventoService: EventoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public alertController: AlertController

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'El vento se ha insertado correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  insertar(){
    let evento: IEvento = {"id": this.eventos.length+1,
                          "nombre": this.nombre,
                          "lugar": this.lugar,
                          "fecha": this.fecha,
                          "img": this.img
                        };
    this._EventoService.setEvento(evento);
  }


}
