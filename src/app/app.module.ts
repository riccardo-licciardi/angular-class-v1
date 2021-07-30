import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Figlio1Component } from './figlio1/figlio1.component';
import { Figlio2Component } from './figlio2/figlio2.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    Figlio1Component,
    Figlio2Component,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
