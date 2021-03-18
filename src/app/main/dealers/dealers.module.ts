import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealersService } from './dealers.service';
import { DealersComponent } from './dealers.component';

@NgModule({
  declarations: [DealersComponent],
  imports: [CommonModule],
  exports: [DealersComponent],
  providers: [DealersService],
})
export class DealersModule {}
