import { Component, OnInit } from '@angular/core';

import { ICar } from './../cars/ICar';
import { CarsService } from './../cars/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    cars: ICar[] | null = new Array<ICar>();

  constructor(private carService: CarsService) {}

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
}
