import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettagliOrdiniRoutingModule } from './dettagli-ordini-routing.module';
import { DettagliOrdiniComponent } from './dettagli-ordini.component';


@NgModule({
  declarations: [
    DettagliOrdiniComponent
  ],
  imports: [
    SharedModule,
    DettagliOrdiniRoutingModule
  ]
})
export class DettagliOrdiniModule { }
