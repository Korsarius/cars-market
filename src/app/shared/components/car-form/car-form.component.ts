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

  addCarForm: FormGroup;

  @Input() car: ICar;
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
  }

  selectDealer(dealerOption: any): void {
    this.shownError = !this.dealers.find(
      (item) =>
        item.name.toLowerCase() === dealerOption.option.value.name.toLowerCase()
    );
    this.addCarForm.controls.dealer.setValue(dealerOption.option.value.name);
  }

  check(value: string): void {
    this.shownError = !this.dealers.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );
    console.log('this.shownError: ', this.shownError);
  }

  close(): void {
    this.closeDialog.emit();
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
    console.log('car: ', car);
    const newCar: ICar | any = {
      brand:
        this.addCarForm.controls.dealer.value.id ||
        this.addCarForm.controls.dealer.value,
      ...this.addCarForm.value,
      creationDate: car && car.creationDate ? car.creationDate : new Date(),
      liked: false,
      newItem: car && car.newItem ? false : true,
      id: car &&  car.id ? car.id : this.randomId(),
    };
    delete newCar.dealer;
    if (car) {
      car = newCar;
      console.log('car: ', car);
      // this.router.navigate([`cars/${car.id}`]);
      this.location.back();
      this.carService.updateCar(car).subscribe();
    } else {
      console.log('newCar: ', newCar);
      this.addNewCar.emit(newCar);
    }
  }
}
