import { delay, takeWhile, tap } from 'rxjs/operators';

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

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
export class HomeComponent implements OnInit, OnDestroy {
  @Input() dealers: IDealer[];

  cars: ICar[] | null = new Array<ICar>();
  newCars: ICar[] = new Array<ICar>();
  likedCar: ICar;
  carDialogValue: ICar;
  dealerDialogValue: IDealer;
  newDealers: IDealer[] = new Array<IDealer>();
  loaded: boolean = false;
  newDealersLoaded: boolean = false;
  isAlive: boolean = true;

  constructor(
    private carService: CarsService,
    private dealerService: DealersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dealerService
      .getDealers()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((dealers) => (this.dealers = dealers));
    this.getCars();
    this.getDealers();
  }

  getCars(): void {
    this.carService
      .getCars()
      .pipe(
        takeWhile(() => this.isAlive),
        delay(1000)
      )
      .subscribe((cars) => {
        this.loaded = true;
        this.likedCar = cars.find((car: ICar) => car.liked);
        this.cars = cars.filter((car: ICar) => car.liked);
        this.newCars = cars.filter((car: ICar) => car.newItem);
        this.dealers
          ? this.cars.forEach((car) => {
              const dealer: IDealer = this.dealers.find(
                (item) => item.id === car.brand
              );
              dealer ? (car.brand = dealer.name) : '';
            })
          : '';
      });
  }

  getDealers(): void {
    this.dealerService
      .getDealers()
      .pipe(
        takeWhile(() => this.isAlive),
        delay(500)
      )
      .subscribe(
        (dealers) =>
          (this.newDealers = dealers.filter((dealer) => dealer.newRecord)) &&
          (this.newDealersLoaded = true)
      );
  }

  dislikeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService
      .updateCar(car)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe();
  }

  openDealerDialog(): void {
    const dialogRef = this.dialog.open(DealerDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((result) => {
        if (result) {
          this.dealerDialogValue = result.data;
          this.dealerService
            .addDealer(this.dealerDialogValue)
            .pipe(takeWhile(() => this.isAlive))
            .subscribe();
          this.getDealers();
        }
      });
  }

  openCarDialog(): void {
    const dialogRef = this.dialog.open(CarDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((result) => {
        if (result) {
          this.carDialogValue = result.data;
          this.carService
            .addCar(this.carDialogValue)
            .pipe(takeWhile(() => this.isAlive))
            .subscribe((car) => {
              this.newCars.push(car);
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
