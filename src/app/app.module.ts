import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as bootstrap from 'bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { DisplayTableComponent } from './display-table/display-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DisplayTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
