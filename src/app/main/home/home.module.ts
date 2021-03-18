import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { CarsModule } from './../cars/cars.module';
import { CardModule } from './../../shared/components/card/card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CarsModule,
    CardModule
  ],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
