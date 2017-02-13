import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { MdlModule } from 'angular2-mdl';

import { routing }  from './app.routing';

import { UsersModule } from "./users/users.module";
import { usersRouting } from "./users/users.routing";

import { HomeModule }        from './home/home.module';
import { homeRouting }        from './home/home.routing';

import { CustomersModule }        from './customers/customers.module';
import { customersRouting }        from './customers/customers.routing';

import { AppComponent }           from './app.component';

import { PruebasModule }        from './pruebas/pruebas.module';
import { pruebasRouting } from "./pruebas/pruebas.routing";

//TODO sacar los components de acá porque no deberían estar
import { CustomerListComponent }  from './customers/customer-list.component';
import { CustomerDetailComponent }  from './customers/customer-detail.component';

import { PageNotFoundComponent }  from './not-found.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),

    HomeModule,
    homeRouting,

    CustomersModule,
    customersRouting,

    FormsModule,
    HttpModule,

    UsersModule,
    usersRouting,

    PruebasModule,
    pruebasRouting,

    MdlModule,

    routing
  ],
  declarations: [
    AppComponent, PageNotFoundComponent, CustomerListComponent, CustomerDetailComponent
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
