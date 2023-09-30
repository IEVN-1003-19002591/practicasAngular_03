import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { OperasBasComponent } from './operas-bas/operas-bas.component';
import { SumaMultiComponent } from './suma-multi/suma-multi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sumas2Component } from './calculos/sumas2/sumas2.component';
import { CinepolisFormComponent } from './calculos/cinepolis-form/cinepolis-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    SumaMultiComponent,
    Sumas2Component,
    CinepolisFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
