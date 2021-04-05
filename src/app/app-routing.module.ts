import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { CarsComponent } from './main/cars/cars.component';
import { DealersComponent } from './main/dealers/dealers.component';
import { CarDetailsComponent } from './main/car-details/car-details.component';
import { MainRoutingModule, routes } from './main/main-routing.module';

// const routes: Routes = [
//   { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
//   { path: 'cars', component: CarsComponent },
//   { path: 'dealers', component: DealersComponent },
//   { path: 'cars/details/:id', component: CarDetailsComponent },
// ];

const appRoutes: Routes = [
  { path: '', component: MainComponent, children: routes },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
