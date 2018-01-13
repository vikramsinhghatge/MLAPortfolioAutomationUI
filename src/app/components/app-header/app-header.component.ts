import { Component } from '@angular/core';
import {UIService} from '../../services/ui.service';
import { LoginService } from '../../pages/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
  providers: [UIService]
})
export class AppHeader {

    constructor(
        public UIService: UIService,
        private loginService: LoginService,
        private router: Router
    ) { }

    logout(){
        this.loginService.logout();
        this.router.navigate(['/login']);
    }

}
