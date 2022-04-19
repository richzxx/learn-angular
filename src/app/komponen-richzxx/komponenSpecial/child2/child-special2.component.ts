import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childSpecial2',
  templateUrl: './child-special2.component.html',
  styleUrls: ['./child-special2.component.sass']
})
export class ChildSpecial2Component implements OnInit {

  public name: string = "Vishwas";
  public message: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
