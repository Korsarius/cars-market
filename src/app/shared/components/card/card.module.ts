import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { CardComponent } from './card.component';
import { MainRoutingModule } from '../../../main/main-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { CarDetailsModule } from '../../../main/car-details/car-details.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MainRoutingModule,
    CarDetailsModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
