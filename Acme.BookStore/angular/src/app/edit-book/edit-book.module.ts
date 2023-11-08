import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { EditBookRoutingModule } from './edit-book-routing.module';
import { EditBookComponent } from './edit-book.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditBookComponent
  ],
  imports: [
    SharedModule,
    EditBookRoutingModule,
    NgbDatepickerModule, // add this line
  ]
})
export class EditBookModule { }
