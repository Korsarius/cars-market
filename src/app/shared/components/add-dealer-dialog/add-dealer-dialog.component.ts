import { Component, OnInit, Inject } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dealer-dialog',
  templateUrl: './add-dealer-dialog.component.html',
  styleUrls: ['./add-dealer-dialog.component.scss'],
})
export class AddDealerDialogComponent implements OnInit {
  idNameFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private dialogRef: MatDialogRef<AddDealerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
