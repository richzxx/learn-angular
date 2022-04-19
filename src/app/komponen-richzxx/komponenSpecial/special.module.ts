import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildSpecial1Component } from './child1/child-special1.component';
import { ChildSpecial2Component } from './child2/child-special2.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ChildSpecial1Component,
    ChildSpecial2Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class SpecialModule { }
