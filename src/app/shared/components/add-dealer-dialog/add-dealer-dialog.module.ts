import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AddDealerDialogComponent } from './add-dealer-dialog.component';
import { DealersModule } from './../../../main/dealers/dealers.module';

@NgModule({
  declarations: [AddDealerDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    // DealersModule
    ReactiveFormsModule,
  ],
  exports: [AddDealerDialogComponent],
  // providers: [
  //   { provide: , useValue: { appearance: 'fill' } },
  // ]
})
export class AddDealerDialogModule {}
