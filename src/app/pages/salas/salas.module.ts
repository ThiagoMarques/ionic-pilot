import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalasPage } from './salas.page';
import { SalaService } from '../services/sala.service';

const routes: Routes = [
  {
    path: '',
    component: SalasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalasPage],
  providers: [SalaService]
})
export class SalasPageModule {}
