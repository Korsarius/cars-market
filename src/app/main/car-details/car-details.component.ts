import { switchMap, delay, takeWhile } from 'rxjs/operators';

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';

import { ICar } from './../cars/ICar';
import { IDealer } from './../dealers/IDealer';
import { CarsService } from '../cars/cars.service';
import { DealersService } from './../dealers/dealers.service';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit, OnDestroy {
  @Input() car: ICar;
  @Input() carDetailsPage: boolean = true;

  dealers: IDealer[];

  isLoaded: boolean = false;
  isEdit: boolean = false;
  isCarDetails: boolean = false;
  isAlive: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private carService: CarsService,
    private dealerService: DealersService,
    public router: Router,
    public dialog: MatDialog,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.dealerService
      .getDealers()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((dealers) => (this.dealers = dealers));
    if (!this.car) {
      this.getCar();
    }
  }

  public getCar(): void {
    this.route.paramMap
      .pipe(
        takeWhile(() => this.isAlive),
        switchMap((params: ParamMap) =>
          this.carService.getCar(params.get('id'))
        ),
        delay(100)
      )
      .subscribe((car) => {
        this.car = car;
        this.isLoaded = true;
        if (this.router.url === `/cars/details/${this.car.id}/edit`) {
          this.isEdit = true;
        }
        this.router.url === `/cars/details/${this.car.id}`
          ? (this.isCarDetails = true)
          : (this.isCarDetails = false);
      });
  }

  openConfirmDialog(car: ICar): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((isDelete) => {
        if (isDelete) {
          const updatedDealer: IDealer = this.dealers.find(
            (dealer) => dealer.name.toLowerCase() === car.brand.toLowerCase()
          );
          updatedDealer.amountOfCars--;
          this.dealerService
            .updateDealer(updatedDealer)
            .pipe(takeWhile(() => this.isAlive))
            .subscribe();
          this.carService
            .deleteCar(car)
            .pipe(takeWhile(() => this.isAlive))
            .subscribe();
          this.router.navigate(['cars']);
        }
      });
  }

  openEditForm(): void {
    this.router.navigate(['cars', 'details', `${this.car.id}`, 'edit']);
    this.isEdit = true;
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
