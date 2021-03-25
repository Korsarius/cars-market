import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-dialog',
  templateUrl: './car-dialog.component.html',
  styleUrls: ['./car-dialog.component.scss'],
})
export class CarDialogComponent implements OnInit {
  // addDealerForm: FormGroup;

  // idNameFormControl = new FormControl('', [Validators.required]);
  
  constructor() {}

  ngOnInit(): void {
    // this.addDealerForm = new FormGroup({
    //   id: new FormControl('', Validators.required),
    //   name: new FormControl('', Validators.required),
    //   headquarters: new FormControl(),
    //   country: new FormControl(),
    //   foundedIn: new FormControl(),
    // });
  }
}
