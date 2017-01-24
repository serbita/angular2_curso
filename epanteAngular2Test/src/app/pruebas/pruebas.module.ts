import { NgModule }       from '@angular/core';
//import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { PruebasComponent, DialogContent }     from './pruebas.component';

//import { PruebasModule } from './pruebas-routing.module';
import { PruebasRoutingModule } from './pruebas-routing.module';


@NgModule({
  imports: [
//    BrowserModule,
    MaterialModule.forRoot(),
    CommonModule,
    FormsModule,
    PruebasRoutingModule
  ],
  declarations: [
    PruebasComponent,
    DialogContent
  ],
  entryComponents: [DialogContent],
  providers: [  
  ],
  //bootstrap: [PruebasModule],
})
export class PruebasModule {}



/*

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [Material2AppAppComponent, DialogContent],
  entryComponents: [DialogContent],
  bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }

*/