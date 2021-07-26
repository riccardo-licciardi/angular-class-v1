import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stretta la soglia, larga la via';

eventoPreso= Number;

prendiEvento(numero: any){
this.eventoPreso=numero
}
}
