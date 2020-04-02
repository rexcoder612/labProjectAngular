import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { CreateComponent } from './create/create.component';
import { DisplayTableComponent } from './display-table/display-table.component';


const routes: Routes = [
  {path: '', redirectTo: '/create', pathMatch: 'full'},
  {path: 'create', component: CreateComponent},
  {path: 'display-table', component: DisplayTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
