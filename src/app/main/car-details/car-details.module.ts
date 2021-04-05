import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from '../main-routing.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { CarDetailsComponent } from './car-details.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { CarFormModule } from '../../shared/components/car-form/car-form.module';
import { CarFormComponent } from '../../shared/components/car-form/car-form.component';

@NgModule({
  declarations: [CarDetailsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    CarFormModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  exports: [CarDetailsComponent],
})
export class CarDetailsModule {}
