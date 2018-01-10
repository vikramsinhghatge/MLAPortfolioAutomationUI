import { Component } from '@angular/core';
import {UIService} from '../../services/ui.service';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
  providers: [UIService]
})
export class AppHeader {

    constructor(
        public UIService: UIService, 
    ) { }

}
