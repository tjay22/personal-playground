import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Experiment1Component } from './experiment1/experiment1.component';
import { Experiment2Component } from './experiment2/experiment2.component';

@NgModule({
  declarations: [
    AppComponent,
    Experiment1Component,
    Experiment2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
