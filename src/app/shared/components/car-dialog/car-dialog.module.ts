import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { CarFormModule } from '../car-form/car-form.module';
import { CarDialogComponent } from './car-dialog.component';

@NgModule({
  declarations: [CarDialogComponent],
  imports: [
    CommonModule,
    // FormsModule,
    // MatButtonModule,
    MatDialogModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // ReactiveFormsModule,
    CarFormModule,
  ],
  exports: [CarDialogComponent],
})
export class CarDialogModule {}
