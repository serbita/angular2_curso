import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';

const customersRoutes: Routes = [
  { path: 'customers', component: CustomerListComponent,
    children: [
      { path: ':id', component: CustomerDetailComponent },
      { path: 'otro', component: CustomerDetailComponent }
    ]
  },  
];

export const customersRouting = RouterModule.forChild(customersRoutes);
