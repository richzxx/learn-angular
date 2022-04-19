import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'specialComponent',
  templateUrl: './special-component.component.html',
  styleUrls: ['./special-component.component.sass'],
  encapsulation: ViewEncapsulation.None // Disable Unique Target Class
})
export class SpecialComponentComponent implements OnInit {

  public name: string = "Codevolution!";
  public message: string = "Welcome to Codevolution";
  public person: object = {
    "firstName": "Richard",
    "lastName": "Laurent"
  };

  public date: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
