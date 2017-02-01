import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { PruebasComponent }  from './pruebas.component';
import { DialogContent }     from './pruebas.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  declarations: [
    PruebasComponent,
    DialogContent
  ],
  entryComponents: [
    PruebasComponent,
    DialogContent
  ],
  providers: [  
  ]
})
export class PruebasModule {}