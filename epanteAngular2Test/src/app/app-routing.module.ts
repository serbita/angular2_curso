import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
 
  { path: 'home', component: HomeComponent },
  //sacar el path de home porque debería ser atendido por el modulo de routing de home

  { path: 'customers', component: CustomerListComponent,
    children: [
      //{ path: '', redirectTo: 'overview', pathMatch: 'full' },    
      { path: ':id', component: CustomerDetailComponent },
      { path: 'otro', component: CustomerDetailComponent }
    ]
  },  
  { path: 'pruebas', component: PruebasComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', component: PageNotFoundComponent }
/* 
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  }
*/  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      /*,{ preloadingStrategy: SelectivePreloadingStrategy }*/
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  /*  SelectivePreloadingStrategy,
    CanDeactivateGuard
  */
  ]
})
export class AppRoutingModule {}