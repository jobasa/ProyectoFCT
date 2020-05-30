import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnyadirPage } from './anyadir.page';

const routes: Routes = [
  {
    path: '',
    component: AnyadirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnyadirPageRoutingModule {}
