import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelli Interface/Interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  persona: Persona={
  capelli:`rossi`,
  altezza:184,
  eta:28 
}
  constructor() { }
  
  ngOnInit(): void {
  }


invia(){
  
}
}
