import { Component, OnInit, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IDealer } from '../../../main/dealers/IDealer';
import { DealersService } from '../../../main/dealers/dealers.service';

@Component({
  selector: 'app-dealer-dialog',
  templateUrl: './dealer-dialog.component.html',
  styleUrls: ['./dealer-dialog.component.scss'],
})
export class DealerDialogComponent implements OnInit {
  // addDealerForm: FormGroup;

  // idNameFormControl = new FormControl('', [Validators.required]);

  dealer: IDealer;
  savedDealer: IDealer;
  dealers: IDealer[];

  shownErrors: boolean = false;

  invalidID: boolean = false;
  invalidIDTwo: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DealerDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { dialogueType: string; dealer: IDealer },
    private dealerService: DealersService
  ) {}

  ngOnInit(): void {
    // this.addDealerForm = new FormGroup({
    //   id: new FormControl('', Validators.required),
    //   name: new FormControl('', Validators.required),
    //   headquarters: new FormControl(),
    //   country: new FormControl(),
    //   foundedIn: new FormControl(),
    // });
    this.dealerService
      .getDealers()
      .subscribe((dealers) => (this.dealers = dealers));
    if (this.data.dealer) {
      this.dealer = { ...this.data.dealer }; //sideEffect
    } else {
      this.dealer = {};
    }
    console.log('this.dealer: ', this.dealer);
  }

  // setDealersId(value: string): void {
  //   if (this.dealers.find((item) => item.id === value)) {
  //     this.invalidID = true;
  //     this.id = '';
  //   }
  //   if (value === '') {
  //     this.invalidIDTwo = true;
  //   }
  //   // else {
  //   //   this.invalidID = false;
  //   // }
  // }

  close(): void {
    this.dialogRef.close();
  }

  saveDealer(dialogueType: string): void {
    // this.invalidID = true;
    // this.invalidName = true;
    this.savedDealer = {
      id: this.dealer.id,
      name: this.dealer.name,
      country: this.dealer.country,
      headquarters: this.dealer.headquarters,
      foundedIn: this.dealer.foundedIn,
      amountOfCars: 0,
      newRecord: dialogueType === 'addDialog' ? true : false,
      registrationDate:
        dialogueType === 'addDialog'
          ? new Date().toLocaleString()
          : this.data.dealer.registrationDate,
    };
    console.log('this.savedDealer: ', this.savedDealer);
    this.dialogRef.close({
      event: 'close',
      data: this.savedDealer,
      dialogueType,
    });
  }
}
