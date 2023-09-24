import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { canActivateGuard } from './authguards/can-activate.guard';
import { VerifyComponent } from './verify/verify.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ScheduleconComponent } from './schedulecon/schedulecon.component';

const routes: Routes = [
  { path: '',redirectTo:'login' ,pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'reg', component: RegisterComponent},
  { path: 'forgot', component: ForgotPasswordComponent},
  { path: 'verify/:token', component: VerifyComponent },
  { path: 'dash', component: DashboardComponent, canActivate: [canActivateGuard]},
  { path:'schedule',component:ScheduleComponent},
  { path:'schedulecon',component:ScheduleconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
