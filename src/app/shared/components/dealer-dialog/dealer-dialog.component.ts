import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IDealer, initDealer } from '../../../main/dealers/IDealer';
import { DealersService } from '../../../main/dealers/dealers.service';

@Component({
  selector: 'app-dealer-dialog',
  templateUrl: './dealer-dialog.component.html',
  styleUrls: ['./dealer-dialog.component.scss'],
})
export class DealerDialogComponent implements OnInit {
  dealer: IDealer;
  dealers: IDealer[];

  shownError: boolean = false;
  isEdit: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DealerDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { dialogueType: string; dealer: IDealer },
    private dealerService: DealersService
  ) {}

  ngOnInit(): void {
    this.dealerService
      .getDealers()
      .subscribe((dealers) => (this.dealers = dealers));
    this.data.dealer
      ? (this.dealer = { ...this.data.dealer }) && (this.isEdit = true)
      : (this.dealer = initDealer());
  }

  check(): void {
    this.shownError = !!this.dealers.find(
      (item) => item.id === this.dealer.id.toUpperCase()
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  saveDealer(): void {
    const updatedDealer = {
      ...this.dealer,
      id: this.dealer.id.toUpperCase(),
      newRecord: !this.isEdit,
      registrationDate: this.isEdit
        ? this.dealer.registrationDate
        : new Date().toLocaleString(),
    };
    this.dialogRef.close({
      event: 'close',
      data: updatedDealer,
    });
  }
}
