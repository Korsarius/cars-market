import { Component, Input, OnInit } from '@angular/core';

import { ICar } from './ICar';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
    cars: ICar[] = new Array<ICar>();
    trimmedCars: ICar[] = new Array<ICar>();
  @Input()   car?: ICar;
    loadMore: boolean = false;
    toggleStatus: boolean = false;
    carsCategory: Set<string> = new Set();
    selectedCarsOnCategory: ICar[] = new Array<ICar>();
    selectedCar: ICar;

    foundCars: ICar[] = new Array<ICar>();

  constructor(private carService: CarsService) {}

    ngOnInit(): void {
    this.getCars();
  }

  //   addItem(newCar: ICar): void {
  //   this.foundCars.push(newCar);
  //   console.log('this.foundCars: ', this.foundCars);
  //   this.cars.push(newCar);
  //   console.log('this.cars: ', this.cars);
  // }

    getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.trimmedCars = this.cars.slice(0, 8); // сделать по 8
      this.cars.forEach((item) =>
        item.category
          ? this.carsCategory.add(item.category)
          : this.carsCategory.add('Other')
      );
    });
  }

    likeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService.updateCar(car).subscribe();
  }

    changeToggleStatus(toggleStatus): void {
    this.toggleStatus = toggleStatus;
  }

    getCarsOnCategory(category: string): void {
    this.selectedCarsOnCategory = this.cars.filter(
      (item) => item.category === category
    );
  }

    selectCar(car: ICar): void {
    this.selectedCar = car;
  }
}
