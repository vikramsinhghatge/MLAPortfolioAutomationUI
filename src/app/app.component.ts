import { Input, Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Response} from '@angular/http';

import {UIService} from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UIService]
})

export class AppComponent implements OnInit, AfterViewInit {
  loading = true;
  constructor(
    private UIService: UIService, 
    private elementRef: ElementRef, 
    private router: Router,
  ) 
  {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.loading = true;
      }
      if(event instanceof NavigationEnd) {
        this.loading = false;
        window.scrollTo(0, 0);
      }
      if (event instanceof NavigationCancel) {
        this.loading = false
      }
      if (event instanceof NavigationError) {
        this.loading = false
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}



}
