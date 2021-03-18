import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

import { CarsService } from './cars.service';
import { CarsComponent } from './cars.component';
import { CarFilterComponent } from '../car-filter/car-filter.component';
import { CardModule } from './../../shared/components/card/card.module';
import { CarDetailsModule } from './../car-details/car-details.module';

@NgModule({
  declarations: [CarsComponent, CarFilterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    CardModule,
    CarDetailsModule,
  ],
  exports: [CarsComponent],
  providers: [CarsService],
})
export class CarsModule {}
