import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';

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
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
