import { CarsService } from './cars.service';
import { CarsComponent } from './cars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CarsComponent],
  imports: [CommonModule],
  exports: [CarsComponent],
  providers: [CarsService],
})
export class CarsModule {}
