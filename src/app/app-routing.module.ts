import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './komponen-richzxx/komponen1/component1.component';
import { Component2Component } from './komponen-richzxx/komponen2/component2.component';
import { ChildSpecial1Component } from './komponen-richzxx/komponenSpecial/child1/child-special1.component';
import { ChildSpecial2Component } from './komponen-richzxx/komponenSpecial/child2/child-special2.component';
import { SpecialComponentComponent } from './komponen-richzxx/komponenSpecial/special-component.component';
import { EmployeeListComponent } from './komponen-richzxx/service/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employeeList', pathMatch: 'full' },
  { path: 'komponen1', component: Component1Component },
  { path: 'komponen2', component: Component2Component },
  {
    path: 'komponenSpesial',
    children: [
      { path: "", component: SpecialComponentComponent },
      { path: "childSpecial1", component: ChildSpecial1Component },
      { path: "childSpecial2", component: ChildSpecial2Component }
    ]
  },
  { path: "employeeList", component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
