import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealersComponent } from './dealers/dealers.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { CarDetailsComponent } from './car-details/car-details.component';

export const routes: Routes = [
  { path: 'dealers', component: DealersComponent },
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cars/details/:id', component: CarDetailsComponent },
  { path: 'cars/details/:id/edit', component: CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
