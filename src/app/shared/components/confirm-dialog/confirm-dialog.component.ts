import { Component, OnInit } from '@angular/core';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  close(isDelete: boolean): void {
    this.dialogRef.close(isDelete);
  }
}
