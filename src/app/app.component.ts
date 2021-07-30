import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Stretta la soglia, larga la via';

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


