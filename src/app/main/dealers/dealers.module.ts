import { DealersService } from './dealers.service';
import { DealersComponent } from './dealers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DealersComponent],
  imports: [CommonModule],
  exports: [DealersComponent],
  providers: [DealersService],
})
export class DealersModule {}
