import { Injectable } from "@angular/core";
import { IEvento } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()

export class EventoService {

    constructor(private _db: AngularFireDatabase) { }

    getEventos() {

        let ref = this._db.database.ref("eventos");
        return ref;

    }

    getEvento(id) {

        let ref = this._db.database.ref("eventos/" + id);
        return ref;

    }

    setEvento(evento: IEvento){
        let ref = this._db.database.ref("eventos");
        ref.push(evento);

    }
}