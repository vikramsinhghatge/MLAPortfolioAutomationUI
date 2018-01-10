import { Input, Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }
  
    ngAfterViewInit(): void {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "./assets/js/scripts/dashboard_1_demo.js";
        this.elementRef.nativeElement.appendChild(s);
    }

}
