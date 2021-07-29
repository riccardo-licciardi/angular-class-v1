import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from './Modelli Interface/Interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Stretta la soglia, larga la via';

persona: Persona={
  capelli:`rossi`,
  altezza:184,
  eta:28 
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


