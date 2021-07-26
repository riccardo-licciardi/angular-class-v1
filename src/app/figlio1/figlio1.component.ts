import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figlio1',
  templateUrl: './figlio1.component.html',
  styleUrls: ['./figlio1.component.scss']
})
export class Figlio1Component implements OnInit {
  @Input() valorePadre; 
  constructor() { }

  ngOnInit(): void {
  }

}
