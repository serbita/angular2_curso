import { ModuleWithProviders }  from '@angular/core';
import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import { HomeComponent }            from './home/home.component';
import { PruebasComponent }         from './pruebas/pruebas.component';
import { CustomerListComponent }    from './customers/customer-list.component';
import { CustomerDetailComponent }  from './customers/customer-detail.component';

/*
import { ComposeMessageComponent }  from './compose-message.component';
import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy }   from './selective-preloading-strategy';
*/

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);