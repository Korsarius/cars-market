import { Component, Input, OnInit } from '@angular/core';

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
  isCategorySelected: boolean = false;
  carsCategory: Set<string> = new Set();
  selectedCarsOnCategory: ICar[];
  selectedCar: ICar;
  defaultCar: ICar | null;
  startIndex: number = 0;
  endIndex: number = 8;

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  filterOut(filterValue: string): void {
    setTimeout(() => {
      this.filteredCars = this.cars.filter(
        (car) => car.brand === filterValue || car.model === filterValue
      );
    }, 500);
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

  changeCategoryView(categoryView): void {
    this.categoryView = categoryView;
    if (this.isCategorySelected) {
      this.isCategorySelected = false;
    }
  }

  getCarsOnCategory(category: string): void {
    this.selectedCarsOnCategory = this.cars.filter(
      (item) => item.category === category
    );
    this.isCategorySelected = true;
    this.defaultCar = this.selectedCarsOnCategory[0];
  }

  selectCar(car: ICar): void {
    this.defaultCar = null;
    this.selectedCar = car;
  }
}
