import { Input, Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'editData-app',
  templateUrl: './editData.component.html',
})
export class EditDataComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {

    }

}
