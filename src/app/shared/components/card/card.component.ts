import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ICar } from './../../../main/cars/ICar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() car: ICar;
  @Input() showButtons: boolean = true;
  @Output() likedCar: EventEmitter<ICar> = new EventEmitter<ICar>();

  constructor() {}

  ngOnInit(): void {}

  changeCar(car: ICar): void {
    this.likedCar.emit(car);
  }
}
