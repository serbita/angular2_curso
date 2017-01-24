import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PruebasComponent }    from './pruebas.component';

const pruebasRoutes: Routes = [
	{
	path: '',
	component: PruebasComponent,
	children: [{
		path: '',
		component: PruebasComponent,
		children: [{
			path: ':id',
			component: PruebasComponent

		}, {
			path: '',
			component: PruebasComponent
		}]
	}]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(pruebasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PruebasRoutingModule { }


/*
const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];
*/