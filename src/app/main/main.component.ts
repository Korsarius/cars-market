import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  id: number;
  defaultLink: HTMLAnchorElement;
  allLinks: NodeListOf<HTMLAnchorElement>;
  activeLink: HTMLElement;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, public router: Router) {
    this.routeSubscription = route.params.subscribe();
  }

  onSelectLink(link: HTMLElement): void {
    this.activeLink = link;
  }

  ngOnInit(): void {}
}
