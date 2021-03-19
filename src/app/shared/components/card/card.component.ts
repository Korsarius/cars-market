import { Component, Input, OnInit } from '@angular/core';

import { ICar } from './../../../main/cars/ICar';
import { CarsService } from './../../../main/cars/cars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() car: ICar;
  @Input() showButtons: boolean = true;

  constructor(private carService: CarsService) {}

  ngOnInit(): void {}

  likeCar(car: ICar): void {
    car.liked = !car.liked;
    this.carService.updateCar(car).subscribe();
  }
}
