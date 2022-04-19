import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './komponen1/component1.component';
import { Component2Component } from './komponen2/component2.component';
import { FormsModule } from '@angular/forms';
import { SpecialComponentComponent } from './komponenSpecial/special-component.component';
import { SpecialModule } from './komponenSpecial/special.module';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './service/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    SpecialComponentComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SpecialModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [EmployeeService]
})
export class RichzxxModule { }
