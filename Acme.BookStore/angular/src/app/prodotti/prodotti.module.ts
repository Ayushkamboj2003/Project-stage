import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottiRoutingModule } from './prodotti-routing.module';
import { ProdottiComponent } from './prodotti.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProdottiComponent
  ],
  imports: [
    CommonModule,
    ProdottiRoutingModule,
    SharedModule,
    NgbDatepickerModule
  ]
})
export class ProdottiModule { }
