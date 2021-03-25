import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ICar } from './../cars/ICar';
import { IDealer } from './../dealers/IDealer';
import { CarsService } from './../cars/cars.service';
import { CarDialogComponent } from '../../shared/components/car-dialog/car-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars: ICar[] | null = new Array<ICar>();
  dialogValue: IDealer;

  constructor(private carService: CarsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService
      .getCars()
      .subscribe((cars) => (this.cars = cars.filter((car) => car.liked)));
  }

  dislikeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService.updateCar(car).subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CarDialogComponent);
  }
}
