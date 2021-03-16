import { Component, OnInit } from '@angular/core';

import { ICar } from './../cars/ICar';
import { CarsService } from './../cars/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public cars: ICar[] | null = new Array<ICar>();

  constructor(private carService: CarsService) {}

  public ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      cars.map((car) => (car.liked ? this.cars.push(car) : ''));
    });
  }

  public dislikeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService.updateCar(car).subscribe();
  }
}
