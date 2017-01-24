import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CustomerListComponent }    from './customer-list.component';
import { CustomerDetailComponent }  from './customer-detail.component';

import { CustomerService } from './customer.service';

//import { CustomerRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
    //,CustomerRoutingModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule {}