import { Component, Output, EventEmitter } from '@angular/core';
import { Caratteristiche } from './Modelli Interface/Interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Stretta la soglia, larga la via';

riccardo: Caratteristiche={
  capelli:`rossi`,
  altezza:184,
  bello:true 
}

x: boolean= false
cambiaBoolean(){
  this.x=!this.x
}

y:boolean=true
cambiaIf(){
  this.y=!this.y
}

lista: any[]=[
{nome:"Riccardo"},
{cognome:"Licciardi"},
{professione:"Schiavo presso Antichi Egizi"}
]
}


