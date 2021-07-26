import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrls: ['./figlio2.component.scss']
})
export class Figlio2Component implements OnInit {
  
   citazione:string='Cerco sempre di fare ciò che non sono capace di fare, per imparare come farlo'

  @Output() evento=new EventEmitter<string>();

constructor() { }

emetti(){
  this.evento.emit(this.citazione)
}

  ngOnInit(): void { 
  }

}
