import { debounceTime, delay } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ICar } from './../cars/ICar';
import { IDealer } from './../dealers/IDealer';
import { CarsService } from './../cars/cars.service';
import { CarDialogComponent } from '../../shared/components/car-dialog/car-dialog.component';
import { DealerDialogComponent } from '../../shared/components/dealer-dialog/dealer-dialog.component';
import { DealersService } from '../dealers/dealers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars: ICar[] | null = new Array<ICar>();
  newCars: ICar[] = new Array<ICar>();
  likedCar: ICar;
  carDialogValue: ICar;
  dealerDialogValue: IDealer;
  newDealers: IDealer[] = new Array<IDealer>();
  loaded: boolean = false;

  constructor(
    private carService: CarsService,
    private dealerService: DealersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getDealers();
  }

  getCars(): void {
    this.carService
      .getCars()
      .pipe(delay(1000))
      .subscribe((cars) => {
        this.loaded = true;
        this.likedCar = cars.find((car: ICar) => car.liked);
        console.log('this.likedCar: ', this.likedCar);
        this.cars = cars.filter((car: ICar) => car.liked);
        this.newCars = cars.filter((car: ICar) => car.creationDate);
      });
  }

  getDealers(): void {
    this.dealerService
      .getDealers()
      .subscribe(
        (dealers) =>
          (this.newDealers = dealers.filter((dealer) => dealer.newRecord))
      );
  }

  dislikeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService.updateCar(car).subscribe();
  }

  openDealerDialog(): void {
    const dialogRef = this.dialog.open(DealerDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dealerDialogValue = result.data;
        this.dealerService.addDealer(this.dealerDialogValue).subscribe();
        this.getDealers();
      }
    });
  }

  openCarDialog(): void {
    const dialogRef = this.dialog.open(CarDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carDialogValue = result.data;
        this.carService.addCar(this.carDialogValue).subscribe((car) => {
          this.newCars.push(car);
          console.log('this.newCars: ', this.newCars);
          console.log('this.newCars[0].image: ', this.newCars[0].image);
        });
      }
    });
  }
}
