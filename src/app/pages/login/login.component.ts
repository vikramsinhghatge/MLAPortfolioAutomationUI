import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


import { User } from './user.model';
import { LoginService } from './login.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../assets/css/pages/auth-light.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  router: Router;
  errorLogin: boolean = false;

  constructor(private loginService: LoginService, _router: Router) {
    this.router = _router;
  }

  loginForm:User = {
    username: '',
    userPassword: ''
  }
  onSubmit() {
    this.loginService.doLogin(this.loginForm)
	     .subscribe( user => {

          this.router.navigate(['/request']);
			 },
       error => this.errorLogin = true);
       /*error => this.errorMessage = <any>error);*/
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
