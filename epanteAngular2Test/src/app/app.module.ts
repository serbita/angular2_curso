import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule }  from './app-routing.module';
import { HomeModule }        from './home/home.module';
import { CustomersModule }        from './customers/customers.module';

//import { HomeComponent }          from './home/home.component';
import { PruebasComponent }       from './pruebas/pruebas.component';
import { CustomerListComponent }  from './customers/customer-list.component';
import { CustomerDetailComponent }  from './customers/customer-detail.component';
import { AppComponent }           from './app.component';
import { DialogContent }          from './app.component';
import { PageNotFoundComponent }  from './not-found.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    CustomersModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent, DialogContent, PageNotFoundComponent, PruebasComponent 
    , CustomerListComponent, CustomerDetailComponent 
  ],
  entryComponents: [DialogContent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
