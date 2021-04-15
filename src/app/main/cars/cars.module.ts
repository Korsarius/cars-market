import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CarsService } from './cars.service';
import { CarsComponent } from './cars.component';
import { CardModule } from './../../shared/components/card/card.module';
import { CarDetailsModule } from './../car-details/car-details.module';

@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    MatProgressSpinnerModule,
    CardModule,
    CarDetailsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CarsComponent],
  providers: [CarsService],
})
export class CarsModule {}
