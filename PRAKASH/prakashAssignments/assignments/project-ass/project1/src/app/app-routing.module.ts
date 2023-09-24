import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { canActivateGuard } from './authguards/can-activate.guard';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: '',redirectTo:'login' ,pathMatch:'full' },
  // { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'reg', component: RegisterComponent},
  { path: 'verify/:token', component: VerifyComponent },
  { path: 'dash', component: DashboardComponent, canActivate: [canActivateGuard]},
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
