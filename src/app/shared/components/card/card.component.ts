import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ICar } from './../../../main/cars/ICar';
import { IDealer } from './../../../main/dealers/IDealer';
import { DealersService } from './../../../main/dealers/dealers.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() car: ICar;
  @Input() showButtons: boolean = true;
  @Output() likedCar: EventEmitter<ICar> = new EventEmitter<ICar>();

  dealers: IDealer[];

  constructor(private dealerService: DealersService) {}

  ngOnInit(): void {
    this.dealerService.getDealers().subscribe((dealers) => this.dealers = dealers);
  }

  changeCar(car: ICar): void {
    this.likedCar.emit(car);
  }
}
