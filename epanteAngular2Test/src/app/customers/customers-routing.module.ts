/*
NO se usa. Lo usaría cuando si queremos que el modulo de customers tenga su propio routing



import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent }    from './customer-list.component';
import { CustomerDetailComponent }  from './customer-detail.component';

const customersRoutes: Routes = [
  { path: 'customers',  	component: CustomerListComponent },
  { path: 'customers/:id', 	component: CustomerDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
*/