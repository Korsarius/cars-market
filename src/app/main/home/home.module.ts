import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { CarDialogComponent } from '../../shared/components/car-dialog/car-dialog.component';
import { CarsModule } from './../cars/cars.module';
import { CardModule } from './../../shared/components/card/card.module';
import { CarDialogModule } from '../../shared/components/car-dialog/car-dialog.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CarsModule,
    CardModule,
    CarDialogModule,
  ],
  exports: [HomeComponent],
  entryComponents: [CarDialogComponent],
  providers: [HomeService],
})
export class HomeModule {}
