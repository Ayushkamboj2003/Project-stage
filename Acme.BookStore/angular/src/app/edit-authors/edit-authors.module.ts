import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAuthorsRoutingModule } from './edit-authors-routing.module';
import { EditAuthorsComponent } from './edit-authors.component';
import { SharedModule } from '../shared/shared.module';
import {NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    EditAuthorsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    EditAuthorsRoutingModule,
    NgbDatepickerModule
  ]
})
export class EditAuthorsModule { }
