import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { PruebasComponent } from './pruebas.component';

const pruebasRoutes: Routes = [
  { path: 'pruebas', component: PruebasComponent },
];

export const pruebasRouting = RouterModule.forChild(pruebasRoutes);
