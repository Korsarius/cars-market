import { Observable } from 'rxjs';
import { debounceTime, delay, takeWhile, tap } from 'rxjs/operators';

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatTabChangeEvent } from '@angular/material/tabs';

import { ICar } from './ICar';
import { IDealer } from './../dealers/IDealer';
import { CarsService } from './cars.service';
import { DealersService } from './../dealers/dealers.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit, OnDestroy {
  @Input() car?: ICar;
  
  cars: ICar[] = new Array<ICar>();
  dealers: IDealer[];
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
  alive: boolean = true;

  filterControl: FormControl = new FormControl();
  shownButtons: boolean = false;

  constructor(
    private carService: CarsService,
    private dealerService: DealersService
  ) {}

  ngOnInit(): void {
    this.dealerService
      .getDealers()
      .pipe(takeWhile(() => this.alive))
      .subscribe((dealers) => (this.dealers = dealers));
    this.handleFilter();
    this.getCars();
  }

  handleFilter(): void {
    this.filterControl.valueChanges
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(1000)
      )
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
      });
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
    this.carService
      .getCars()
      .pipe(
        takeWhile(() => this.alive),
        delay(1000)
      )
      .subscribe((cars) => {
        this.loaded = true;
        this.cars = cars;
        this.dealers
          ? this.cars.forEach((car) => {
              const dealer: IDealer = this.dealers.find(
                (item) => item.id === car.brand
              );
              dealer ? (car.brand = dealer.name) : '';
            })
          : '';
        this.trimmedCars = this.cars.slice(this.startIndex, 8);
        this.cars.forEach((item) =>
          item.category
            ? this.carsCategory.add(item.category)
            : this.carsCategory.add('Other')
        );
      });
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
    this.carService
      .updateCar(car)
      .pipe(takeWhile(() => this.alive))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
