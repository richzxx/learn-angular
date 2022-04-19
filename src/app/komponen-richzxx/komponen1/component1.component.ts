import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'komponen1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.sass'],
  encapsulation: ViewEncapsulation.None // Disable Unique Target Class
})
export class Component1Component implements OnInit {

  public name: string = "Richard Laurent";
  public myId: string = "TestId";

  isDisabled: boolean = true;
  hasError: boolean = false;
  isSpecial: boolean = true;

  // Object binding for ngClass
  messageClass: any = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  // Style binding for ngStyle
  titleStyles: any = {
    color: "cyan",
    fontStyle: "italic"
  }

  greetingMessage: string = "";
  myName: string = "";
  displayName: boolean = true;
  myColor: string = "red";

  public colors: string[] = [
    "red", "blue", "green", "yellow"
  ];

  constructor() { 

  }

  ngOnInit(): void {
  }

  // Part Event Binding
  onClick(event: any) {
    console.log(event);
    this.greetingMessage = "Click Button, Successful!";
  }

  // Part Template Reference Variables
  logMessage(value: any) {
    console.log(value);
  }

}
