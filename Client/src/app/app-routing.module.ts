import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { ControlPanelComponent } from './employee/control-panel/control-panel.component';
import { MonthlyReportComponent } from './employee/monthly-report/monthly-report.component';
import { ManagerMainComponent } from './manager/manager-main/manager-main.component';
import { ManagerReportComponent } from './manager/manager-report/manager-report.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ConfirmUserComponent } from './user/confirm-user/confirm-user.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'confirm/:mail', component: ConfirmUserComponent},
  { path: 'signUp', component: SignUpComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'controlPanel', component: ControlPanelComponent },
  { path: 'monthlyReport', component: MonthlyReportComponent },
  { path: 'monthlyReport/:firstName/:lastName', component: MonthlyReportComponent },
  { path: 'managerMain', component: ManagerMainComponent },
  { path: 'managerReport', component:ManagerReportComponent },
  { path: 'resetPassword/:email', component:ResetPasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
