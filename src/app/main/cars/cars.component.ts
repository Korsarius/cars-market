import { Component, Input, OnInit } from '@angular/core';

import { ICar } from './ICar';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  public cars: ICar[] = new Array<ICar>();
  public trimmedCars: ICar[] = new Array<ICar>();
  @Input() public car?: ICar;
  public loadMore: boolean = false;
  public toggleStatus: boolean = false;
  public carsCategory: Set<string> = new Set();
  public selectedCarsOnCategory: ICar[] = new Array<ICar>();
  public selectedCar: ICar;

  constructor(private carService: CarsService) {}

  public ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.trimmedCars = this.cars.slice(0, 8);
      this.cars.forEach((item) => {
        if (!item.category) {
          this.carsCategory.add('Other');
          return;
        }
        this.carsCategory.add(item.category);
      });
    });
  }

  public likeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService.updateCar(car).subscribe();
  }

  public changeToggleStatus(toggleStatus): void {
    this.toggleStatus = toggleStatus;
    console.log('this.toggleStatus: ', this.toggleStatus);
  }

  public getCarsOnCategory(category: string): void {
    this.selectedCarsOnCategory = this.cars.filter(
      (item) => item.category === category
    );
  }

  public selectCar(car: ICar): void {
    this.selectedCar = car;
  }
}
