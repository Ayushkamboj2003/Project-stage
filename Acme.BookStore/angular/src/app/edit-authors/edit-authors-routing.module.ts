import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAuthorsComponent } from './edit-authors.component';
import { AuthorComponent } from '../author/author.component';
import { Router } from '@angular/router';
const routes: Routes = [{ path: '', component: EditAuthorsComponent }];
[{path: '/authors', component: AuthorComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAuthorsRoutingModule { }
