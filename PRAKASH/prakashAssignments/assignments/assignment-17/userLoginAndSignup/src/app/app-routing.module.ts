import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLoignPageComponent } from './users-loign-page/users-loign-page.component';
import { UsersdatatableComponent } from './usersdatatable/usersdatatable.component';
import { UsershomepageComponent } from './usershomepage/usershomepage.component';
import { AuthGuard } from './guards/auth.guard';
import { EmailForForgotpasswordComponent } from './email-for-forgotpassword/email-for-forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [

  {path: '',component:UsershomepageComponent},
  {path: 'login',component:UsersLoignPageComponent},
  {path: 'home',component:UsershomepageComponent},
  {path: 'data',component:UsersdatatableComponent},
  {path: 'forgotpassword',component:EmailForForgotpasswordComponent},
  {path: 'reset',component:ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
