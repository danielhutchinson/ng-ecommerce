import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/vehicle-search',
    pathMatch: 'full',
  },
  {
    path: 'vehicle-search',
    loadComponent: () =>
      import('./pages/vehicle-search/vehicle-search').then((m) => m.VehicleSearch),
  },
  {
    path: 'vehicle/:id',
    loadComponent: () =>
      import('./pages/vehicle-details/vehicle-details').then((m) => m.VehicleDetails),
  },
];
