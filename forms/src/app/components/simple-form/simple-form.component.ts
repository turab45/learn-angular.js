import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  name = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  changeName() {
    this.name.setValue('Hello, ' + this.name.value);

  }
}
