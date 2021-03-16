import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  id: number;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe();
  }

  ngOnInit(): void {}
}
