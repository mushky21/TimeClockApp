import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { ControlPanelComponent } from './employee/control-panel/control-panel.component';
import { NgxMapboxGLModule, MapService } from 'ngx-mapbox-gl';
import { DisplayMapComponent } from './components/display-map/display-map.component';
import { MonthlyReportComponent } from './employee/monthly-report/monthly-report.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ManagerMainComponent } from './manager/manager-main/manager-main.component';
import { TableMonthReportComponent } from './components/table-month-report/table-month-report.component';
import { TableManagerReportComponent } from './components/table-manager-report/table-manager-report.component';
import { ManagerReportComponent } from './manager/manager-report/manager-report.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ConfirmUserComponent } from './user/confirm-user/confirm-user.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotComponent,
    ControlPanelComponent,
    DisplayMapComponent,
    MonthlyReportComponent,
    PaginationComponent,
    ManagerMainComponent,
    ManagerReportComponent,
    TableMonthReportComponent,
    TableManagerReportComponent,
    HeatMapComponent,
    ResetPasswordComponent,
    ConfirmUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: "pk.eyJ1IjoibXVzaG11c2g3MjIiLCJhIjoiY2szOHB2NnB1MDRkeTNwa3F3cmc1c2hscSJ9.4qG261RHSIAdxSDrsJxDQw", // Optionnal, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
