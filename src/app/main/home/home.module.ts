import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
