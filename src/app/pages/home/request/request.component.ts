import { Input, Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'request-app',
  templateUrl: './request.component.html',
})
export class RequestComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {

    }

}
