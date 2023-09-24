import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerrorComponent } from './customerror/customerror.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
{component:HomeComponent,path:'home'},
{component:AboutComponent,path:'about'},
{component:ContactComponent,path:'contact'},
{component:LoginComponent,path:'login'},
{component:CustomerrorComponent,path:'**'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



