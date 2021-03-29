import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { CarDialogComponent } from '../../shared/components/car-dialog/car-dialog.component';
import { CarsModule } from './../cars/cars.module';
import { CardModule } from './../../shared/components/card/card.module';
import { CarDialogModule } from '../../shared/components/car-dialog/car-dialog.module';
import { DealersModule } from './../dealers/dealers.module';
import { DealerDialogModule } from '../../shared/components/dealer-dialog/dealer-dialog.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CarsModule,
    CardModule,
    CarDialogModule,
    DealersModule,
    DealerDialogModule,
  ],
  exports: [HomeComponent],
  entryComponents: [CarDialogComponent],
  providers: [HomeService],
})
export class HomeModule {}
