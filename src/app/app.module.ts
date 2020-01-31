import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeirocomponenteComponent } from './primeirocomponente/primeirocomponente.component';
import { FormsModule } from '@angular/forms';
import { ChangetextDirective } from './changetext.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimeirocomponenteComponent,
    ChangetextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
