import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../assets/css/pages/auth-light.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  router: Router;

  constructor(_router: Router) {
    this.router = _router;
  }

  loginForm = {
    name: '',
    password: ''
  }
  onSubmit() {
    //alert("form submit" + JSON.stringify(this.loginForm));
    //this.router.navigateByUrl('/home');
    this.router.navigate(['/request']);
  }

  ngAfterViewInit() {

  }
  ngOnInit(): void {
      $('body').css({'background-color':'#2CC4CB', 'background-image':'linear-gradient(135deg,#2CC4CB,#18C5A9)'});
  }
  ngOnDestroy() {
      $('body').css({'background-color':'', 'background-image':''});
  }

}
