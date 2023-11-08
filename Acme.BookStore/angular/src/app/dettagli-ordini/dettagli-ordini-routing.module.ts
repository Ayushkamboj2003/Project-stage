import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliOrdiniComponent } from './dettagli-ordini.component';

const routes: Routes = [{ path: '', component: DettagliOrdiniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettagliOrdiniRoutingModule { }
