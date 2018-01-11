import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule }   from '@angular/http';

import {BaseRequestOptions, Http} from "@angular/http";

import {MockBackend} from "@angular/http/testing";

import { AppComponent } from './app.component';
import { LoginService } from './pages/login/login.service';


// Import layouts
import {
  FullLayout,
  SimpleLayout
} from './layouts';

const APP_LAYOUTS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppHeader,
  AppFooter,
  AppSidebar,
  AppThemeConfig,
  SessionModal
} from './components';

const APP_COMPONENTS = [
  AppFooter,
  AppHeader,
  AppSidebar,
  AppThemeConfig,
  SessionModal
]

// Import routing module
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_LAYOUTS,
    ...APP_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    MockBackend,
    BaseRequestOptions,
    {
    provide: Http,
    deps: [MockBackend, BaseRequestOptions],
        useFactory: mockBackEndFun()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppMockModule { }

export function mockBackEndFun(backend: MockBackend, options: BaseRequestOptions) { return new Http(backend, options);}
