import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'childSpecial1',
  templateUrl: './child-special1.component.html',
  styleUrls: ['./child-special1.component.sass']
})
export class ChildSpecial1Component implements OnInit {

  @Input() public parentData: any;
  @Output() public childEvent: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit("Hey Codevolution!");
  }

}
