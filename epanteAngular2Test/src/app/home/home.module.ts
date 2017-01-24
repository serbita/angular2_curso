import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent }    from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
