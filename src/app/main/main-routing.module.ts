import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealersComponent } from './dealers/dealers.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'dealers', component: DealersComponent },
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
