import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthGuard } from './utils/auth.guard';
import { JwtInterceptor } from './utils/jwt.interceptor';
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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
