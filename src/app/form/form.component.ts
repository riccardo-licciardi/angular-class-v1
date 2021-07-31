import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  fg: FormGroup;

  constructor() {
this.fg= new FormGroup({

nome:new FormControl(),
cognome:new FormControl(),
eta:new FormControl()
});
}

leggi(x: any){console.log(x)}

ngOnInit(): void {
}

}
