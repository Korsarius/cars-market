import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DealersService } from './dealers.service';
import { DealersComponent } from './dealers.component';
import { DealerDialogComponent } from '../../shared/components/dealer-dialog/dealer-dialog.component';
import { DealerDialogModule } from 'src/app/shared/components/dealer-dialog/dealer-dialog.module';

@NgModule({
  declarations: [DealersComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    DealerDialogModule,
  ],
  exports: [DealersComponent],
  entryComponents: [DealerDialogComponent],
  providers: [DealersService],
})
export class DealersModule {}
