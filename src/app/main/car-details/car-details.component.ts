import { switchMap, delay } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';

import { ICar } from './../cars/ICar';
import { CarsService } from '../cars/cars.service';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  @Input() car: ICar;
  @Input() carDetailsPage: boolean = true;

  isLoaded: boolean = false;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private carService: CarsService,
    public router: Router,
    public dialog: MatDialog,
    public location: Location
  ) {}

  ngOnInit(): void {
    if (!this.car) {
      this.getCar();
    }
  }

  public getCar(): void {
    this.route.paramMap
      .pipe(
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
      });
  }

  openConfirmDialog(car: ICar): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((isDelete) => {
      if (isDelete) {
        this.carService.deleteCar(car).subscribe();
        this.router.navigate(['cars']);
      }
    });
  }

  openEditForm(): void {
    this.router.navigate(['cars', 'details', `${this.car.id}`, 'edit']);
    this.isEdit = true;
  }
}
