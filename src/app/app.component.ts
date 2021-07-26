import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Stretta la soglia, larga la via';

  valoreFiglio2='Cerco sempre di fare ciò che non sono capace di fare, per imparare come farlo';

intercettaEventoFiglio2(valoreFiglio2: string){
  this.valoreFiglio2
}

}
