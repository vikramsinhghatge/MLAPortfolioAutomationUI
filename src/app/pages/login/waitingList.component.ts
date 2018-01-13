import { Input, Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'waiting-list-app',
  templateUrl: './waitingList.component.html',
})
export class WaitingListComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {

    }

}
