import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
// import { CarFilterComponent } from './car-filter/car-filter.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, MatSidenavModule, MatIconModule],
  exports: [MainComponent],
  providers: [MainComponent],
})
export class MainModule {}
