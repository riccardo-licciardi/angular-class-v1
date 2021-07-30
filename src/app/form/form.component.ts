import { Component, OnInit } from '@angular/core';
import { Caratteristiche } from './interfaccia_class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  persona: Caratteristiche = new Caratteristiche;
  constructor() { }

  ngOnInit(): void {
  }

}
