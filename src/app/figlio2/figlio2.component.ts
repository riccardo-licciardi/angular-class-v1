import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrls: ['./figlio2.component.scss']
})
export class Figlio2Component implements OnInit {
  
  @Output() motivati=new EventEmitter<string>()
  
  muoviti:string='Cerco sempre di fare ciò che non sono capace di fare, per imparare come farlo'

constructor() { }

stampa(value:string){
  this.motivati.emit(value)
}

  ngOnInit(): void {
  }

}
