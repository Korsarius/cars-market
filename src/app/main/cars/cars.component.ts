import { debounceTime } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatTabChangeEvent } from '@angular/material/tabs';

import { ICar } from './ICar';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
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

  filterControl = new FormControl();

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.handleFilter();
    this.getCars();
  }

  handleFilter(): void {
    this.filterControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(
        (value) =>
          (this.filteredCars = this.cars.filter(
            (car) => car.brand === value || car.model === value
          ))
      );
  }

  getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
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
}
