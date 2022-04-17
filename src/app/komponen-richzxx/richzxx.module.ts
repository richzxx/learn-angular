import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './komponen1/component1.component';
import { Component2Component } from './komponen2/component2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RichzxxModule { }
