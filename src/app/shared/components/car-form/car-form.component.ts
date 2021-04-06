import { tap } from 'rxjs/operators';

import { Location } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DealersService } from '../../../main/dealers/dealers.service';
import { CarsService } from './../../../main/cars/cars.service';
import { IDealer } from '../../../main/dealers/IDealer';
import { ICar } from '../../../main/cars/ICar';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit {
  @Output() addNewCar = new EventEmitter<ICar>();
  @Output() closeDialog = new EventEmitter();
  @Input() car: ICar;
  @Output() isEdit = new EventEmitter<boolean>();
  @Output() updatedCar = new EventEmitter<ICar>();

  addCarForm: FormGroup;

  cars: ICar[] = new Array<ICar>();
  dealers: IDealer[];
  shownError: boolean = false;
  fileToUpload: File = null;

  constructor(
    private dealerService: DealersService,
    private carService: CarsService,
    public router: Router,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.dealerService
      .getDealers()
      .subscribe((dealers) => (this.dealers = dealers));

    this.carService.getCars().subscribe((cars) => (this.cars = cars));

    this.addCarForm = new FormGroup({
      model: new FormControl(
        this.car ? this.car.model : '',
        Validators.required
      ),
      dealer: new FormControl(
        this.car ? this.car.brand : '',
        Validators.required
      ),
      class: new FormControl(this.car ? this.car.class : ''),
      year: new FormControl(this.car ? this.car.year : ''),
      color: new FormControl(this.car ? this.car.color : ''),
      transmission: new FormControl(this.car ? this.car.transmission : ''),
      description: new FormControl(this.car ? this.car.description : ''),
      image: new FormControl(),
    });

    this.addCarForm.controls.dealer.valueChanges
      .pipe(
        tap((value) => {
          this.shownError =
            value &&
            this.dealers &&
            !this.dealers.find(
              (el) => el.name.toLowerCase() === value.toString().toLowerCase()
            );
          console.log(value);
        })
      )
      .subscribe();
  }

  selectDealer(dealerOption: any): void {
    this.shownError = !this.dealers.find(
      (item) =>
        item.name.toLowerCase() === dealerOption.option.value.name.toLowerCase()
    );
    this.addCarForm.controls.dealer.setValue(dealerOption.option.value.name);
  }

  close(): void {
    this.closeDialog.emit();
    if (this.car) {
      this.router.navigate(['cars', 'details', `${this.car.id}`]);
    }
    this.isEdit.emit(false);
  }

  randomId(): string {
    const id = String(Math.ceil(Math.random() * 10000000000));
    for (const car of this.cars) {
      if (car.id === id) {
        return this.randomId();
      } else {
        return id;
      }
    }
  }

  saveCar(car?: ICar): void {
    const newCar: ICar | any = {
      brand:
        this.addCarForm.controls.dealer.value.id ||
        this.addCarForm.controls.dealer.value,
      ...this.addCarForm.value,
      creationDate: car && car.creationDate ? car.creationDate : new Date(),
      liked: false,
      newItem: car && car.newItem ? false : true,
      id: car && car.id ? car.id : this.randomId(),
      image:
        !this.addCarForm.controls.image.value && this.car && this.car.image
          ? this.car.image
          : this.addCarForm.controls.image.value,
    };
    delete newCar.dealer;
    if (car) {
      car = newCar;
      this.isEdit.emit(false);
      this.updatedCar.emit(car);
      this.router.navigate(['cars', 'details', `${this.car.id}`]);
      this.carService.updateCar(car).subscribe();
    } else {
      const updatedDealer: IDealer = this.dealers.find(
        (dealer) => dealer.id === newCar.brand.toUpperCase()
      );
      updatedDealer.amountOfCars++;
      this.dealerService.updateDealer(updatedDealer).subscribe();
      this.addNewCar.emit(newCar);
    }
  }
}
