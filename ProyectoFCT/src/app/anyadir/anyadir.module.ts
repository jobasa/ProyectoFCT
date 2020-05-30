import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnyadirPageRoutingModule } from './anyadir-routing.module';

import { AnyadirPage } from './anyadir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnyadirPageRoutingModule
  ],
  declarations: [AnyadirPage]
})
export class AnyadirPageModule {}
