import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdiniRoutingModule } from './ordini-routing.module';
import { OrdiniComponent } from './ordini.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OrdiniComponent
  ],
  imports: [
    CommonModule,
    OrdiniRoutingModule,
    SharedModule,
    NgbDatepickerModule
  ]
})
export class OrdiniModule { }
