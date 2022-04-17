import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'komponen2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.sass'],
  encapsulation: ViewEncapsulation.None // Disable Unique Target Class
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
