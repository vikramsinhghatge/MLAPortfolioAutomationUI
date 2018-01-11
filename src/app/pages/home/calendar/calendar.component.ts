import { Input, Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'calendar-app',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {

    }

}
