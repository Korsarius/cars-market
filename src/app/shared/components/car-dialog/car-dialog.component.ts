import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ICar } from './../../../main/cars/ICar';
import { IDealer } from '../../../main/dealers/IDealer';

@Component({
  selector: 'app-car-dialog',
  templateUrl: './car-dialog.component.html',
  styleUrls: ['./car-dialog.component.scss'],
})
export class CarDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CarDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { dealer: IDealer; car: ICar }
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  saveCar(car: ICar): void {
    this.dialogRef.close({
      event: 'close',
      data: car,
    });
  }
}
