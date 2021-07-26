import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Figlio1Component } from './figlio1/figlio1.component';
import { Figlio2Component } from './figlio2/figlio2.component';

@NgModule({
  declarations: [
    AppComponent,
    Figlio1Component,
    Figlio2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
