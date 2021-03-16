import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ICar } from '../cars/ICar';
import { CarsService } from '../cars/cars.service';

@Component({
  selector: 'app-cars-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss'],
})
export class CarFilterComponent implements OnInit {
  cars$?: Observable<ICar[]>;
  private searchTerms: Subject<string> = new Subject<string>();
  @Output()   filteredCar: EventEmitter<ICar> = new EventEmitter<ICar>();

    constructor(private carService: CarsService) {}

    search(term: string): void {
    this.searchTerms.next(term);
  }

    addNewItem(car: ICar): void {
    this.filteredCar.emit(car);
  }

    ngOnInit(): void {
    this.cars$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.carService.searchCars(term))
    );
  }
}
