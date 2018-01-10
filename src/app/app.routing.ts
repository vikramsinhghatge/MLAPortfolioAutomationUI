import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RequestComponent } from './pages/home/request/request.component';
import { WaitingListComponent } from './pages/home/waitingList/waitingList.component';
import { Dashboard2Component } from './pages/dashboard_2/dashboard_2.component';
import { Dashboard3Component } from './pages/dashboard_3/dashboard_3.component';
import { Dashboard4Component } from './pages/dashboard_4/dashboard_4.component';
import { Dashboard5Component } from './pages/dashboard_5/dashboard_5.component';
import { Datatable } from './pages/datatable/datatable.component';
import { ChartJS } from './pages/chartjs/chartjs.component';
import { Peity } from './pages/peity/peity.component';
import { SparklineComponent } from './pages/sparkline/sparkline.component';
import { MorrisChartComponent } from './pages/morris-chart/morris-chart.component';
import { IconsComponent } from './pages/icons/icons.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { Mailbox } from './pages/mailbox/mailbox.component';
import { MailView } from './pages/mail.view/mail.view.component';
import { MailCompose } from './pages/mail.compose/mail.compose.component';
import { Blog } from './pages/blog/blog.component';
import { Article } from './pages/article/article.component';
import { EcommerceProdutsBoard } from './pages/ecommerce_products_board/ecommerce_products_board.component';
import { EcommerceProdutsList } from './pages/ecommerce_products_list/ecommerce_products_list.component';
import { EcommerceProdutsEdit } from './pages/ecommerce_products_edit/ecommerce_products_edit.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginDarkComponent } from './pages/login-dark/login-dark.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterDarkComponent } from './pages/register-dark/register-dark.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';

import { FormsModule }   from '@angular/forms';
import { CommonModule } from "@angular/common"

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './layouts';


const appRoutes: Routes = [
    {
      path: '', component: LoginComponent
    },

    {
      path: '',
      component: FullLayout,
      children: [
        { path: 'home', component: HomeComponent
        },
        { path: 'request', component: RequestComponent},
        { path: 'waitingList', component: WaitingListComponent},

        { path: 'dashboard_2', component: Dashboard2Component},
        { path: 'dashboard_3', component: Dashboard3Component},
        { path: 'dashboard_4', component: Dashboard4Component},
        { path: 'dashboard_5', component: Dashboard5Component},
        { path: 'datatable', component: Datatable},
        { path: 'chartjs', component: ChartJS},
        { path: 'charts-peity', component: Peity},
        { path: 'charts-sparkline', component: SparklineComponent},
        { path: 'charts-morris', component: MorrisChartComponent},
        { path: 'widgets', component: WidgetsComponent},
        { path: 'icons', component: IconsComponent},
        { path: 'mailbox', component: Mailbox},
        { path: 'mail_view', component: MailView},
        { path: 'mail_compose', component: MailCompose},
        { path: 'blog', component: Blog},
        { path: 'article', component: Article},
        { path: 'ecommerce_products_board', component: EcommerceProdutsBoard},
        { path: 'ecommerce_products_list', component: EcommerceProdutsList},
        { path: 'ecommerce_products_edit', component: EcommerceProdutsEdit},
        { path: 'invoice', component: InvoiceComponent},
        { path: 'timeline', component: TimelineComponent},
        { path: 'faq', component: FaqComponent},
        { path: 'search', component: SearchComponent},
        { path: 'profile', component: ProfileComponent},
      ]
    },
  {
    path: '',
    component: SimpleLayout,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'login_dark', component: LoginDarkComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'register_dark', component: RegisterDarkComponent},
      { path: 'lockscreen', component: LockscreenComponent},
      { path: 'forgot_password', component: ForgotPasswordComponent},
      { path: 'error_404', component: Error404Component},
      { path: 'error_500', component: Error500Component},
    ]
  },
  {
      path: '**',
      redirectTo: '/'
  }
];


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  declarations: [
    HomeComponent, RequestComponent, WaitingListComponent, Dashboard2Component, Dashboard3Component, Dashboard4Component, Dashboard5Component, Datatable,
    ChartJS, Peity, SparklineComponent, MorrisChartComponent, IconsComponent, WidgetsComponent,
    Mailbox, MailView, MailCompose, Blog, Article, EcommerceProdutsBoard, EcommerceProdutsList, EcommerceProdutsEdit,
    InvoiceComponent, TimelineComponent, FaqComponent, ProfileComponent, SearchComponent,
    LoginComponent,
    LoginDarkComponent,
    RegisterComponent,
    RegisterDarkComponent,
    ForgotPasswordComponent,
    LockscreenComponent,
    Error404Component,
    Error500Component,
  ]
})
export class AppRoutingModule {}
