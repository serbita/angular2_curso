import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];

export const homeRouting = RouterModule.forChild(homeRoutes);
