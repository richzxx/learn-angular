import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RichzxxModule } from './komponen-richzxx/richzxx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichzxxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
