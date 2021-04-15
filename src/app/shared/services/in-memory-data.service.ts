import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CARS } from '../../../assets/data/data.constants.cars';
import { DEALERS } from '../../../assets/data/data.constants.dealers';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const cars = CARS;
    const dealers = DEALERS;
    return { cars, dealers };
  }
}
