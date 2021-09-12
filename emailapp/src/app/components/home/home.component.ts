import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  btnClick() {

    this.snack.open("Submit button clicekd.", "cancel");
    console.log("clicked...");
  }
}
