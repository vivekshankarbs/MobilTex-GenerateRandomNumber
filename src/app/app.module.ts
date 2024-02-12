import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateRandomNumberComponent } from './generate-random-number/generate-random-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateRandomNumberComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
