import { Component, OnInit, Input } from '@angular/core';

import { ICar } from './../cars/ICar';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  @Input() car: ICar;

  constructor() { }

  ngOnInit(): void {
  }

}
