import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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

  model: any = {};
  returnUrl: string;
  errorLogin: boolean = false;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
        // reset login status
        this.loginService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/request';

        $('body').css({'background-color':'#2CC4CB', 'background-image':'linear-gradient(135deg,#2CC4CB,#18C5A9)'});
    }

  onSubmit() {
    this.loginService.doLogin(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.errorLogin = true;
                });
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
      $('body').css({'background-color':'', 'background-image':''});
  }

}
