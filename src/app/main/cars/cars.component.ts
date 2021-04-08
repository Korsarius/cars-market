import { Subscription } from 'rxjs';
import { debounceTime, delay } from 'rxjs/operators';

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatTabChangeEvent } from '@angular/material/tabs';

import { ICar } from './ICar';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit, OnDestroy {
  @Input() car?: ICar;

  cars: ICar[] = new Array<ICar>();
  trimmedCars: ICar[] = new Array<ICar>();
  filteredCars: ICar[] = new Array<ICar>();
  categoryView: boolean = false;
  carsCategory: Set<string> = new Set();
  selectedCarsOnCategory: ICar[];
  selectedCar: ICar;
  startIndex: number = 0;
  endIndex: number = 8;
  loaded: boolean = false;
  notFound: boolean = false;

  filterControl: FormControl = new FormControl();
  shownButtons: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.handleFilter();
    this.getCars();
  }

  handleFilter(): void {
    this.subscriptions.push(
      this.filterControl.valueChanges
        .pipe(debounceTime(1000))
        .subscribe((value) => {
          if (value === '') {
            this.filteredCars = new Array<ICar>();
            this.trimmedCars = this.cars.slice(0, 8);
          } else {
            this.filteredCars = this.cars.filter(
              (car) =>
                car.brand.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                car.model.toLowerCase().indexOf(value.toLowerCase()) !== -1
            );
            this.filteredCars.length === 0
              ? (this.notFound = true)
              : (this.notFound = false);
            this.trimmedCars = new Array<ICar>();
          }
        })
    );
  }

  clearFilter(): void {
    /**  Simulate server response delay */
    setTimeout(() => {
      this.notFound = false;
      this.filteredCars = new Array<ICar>();
      this.trimmedCars = this.cars.slice(0, 8);
    }, 500);
  }

  getCars(): void {
    this.subscriptions.push(
      this.carService
        .getCars()
        .pipe(delay(1000))
        .subscribe((cars) => {
          this.loaded = true;
          this.cars = cars;
          this.trimmedCars = this.cars.slice(this.startIndex, 8);
          this.cars.forEach((item) =>
            item.category
              ? this.carsCategory.add(item.category)
              : this.carsCategory.add('Other')
          );
        })
    );
  }

  loadMore(): void {
    this.startIndex = this.endIndex;
    this.endIndex += 8;
    this.trimmedCars.push(...this.cars.slice(this.startIndex, this.endIndex));
  }

  rollUp(): void {
    this.trimmedCars = this.cars.slice(0, 8);
    this.startIndex = 0;
    this.endIndex = 8;
  }

  changeCategoryView(categoryView: boolean): void {
    this.categoryView = categoryView;
    this.trimmedCars = this.cars.slice(0, 8);
    this.selectedCarsOnCategory = this.cars.filter(
      (car) => car.category === this.carsCategory.values().next().value
    );
    this.selectedCar = this.selectedCarsOnCategory[0];
  }

  getCarsOnCategory(category: MatTabChangeEvent): void {
    this.selectedCarsOnCategory = this.cars.filter(
      (item) => item.category === category.tab.textLabel.toLowerCase()
    );
    if (this.selectedCarsOnCategory.length === 0) {
      this.selectedCarsOnCategory = this.cars.filter((car) => !car.category);
    }
    this.selectedCar = this.selectedCarsOnCategory[0];
  }

  selectCar(car: ICar): void {
    this.selectedCar = car;
  }

  likeOrDislikeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService.updateCar(car).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
