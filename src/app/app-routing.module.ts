import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './komponen-richzxx/komponen1/component1.component';
import { Component2Component } from './komponen-richzxx/komponen2/component2.component';

const routes: Routes = [
  { path: '', redirectTo: 'komponen1', pathMatch: 'full' },
  { path: 'komponen1', component: Component1Component },
  { path: 'komponen2', component: Component2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
