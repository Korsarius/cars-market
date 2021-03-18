import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ICar } from './../cars/ICar';

@Component({
  selector: 'app-cars-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss'],
})
export class CarFilterComponent implements OnInit {
  @Output() filterValue: EventEmitter<string> = new EventEmitter<string>();
  // @Input() foundCars: ICar[] = new Array<ICar>();

  constructor() {}

  getFilterValue(value: string): void {
    this.filterValue.emit(value);
  }

  ngOnInit(): void {}
}
