import { Component, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';

import {UIService} from '../../services/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  providers: [UIService]
})
export class FullLayout implements AfterViewInit {

	  constructor(
	    public UIService: UIService, 
	    private router: Router,
    ) { }

    ngAfterViewInit() {
        this.UIService.activate();
        this.router.events.subscribe(event => {
          if(event instanceof NavigationStart) {
            this.UIService.activate();
          }
        });
    }

}
