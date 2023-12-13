import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';


import { HomeComponent } from './home/home.component';
import { RegiterComponent } from './regiter/regiter.component';
import { TableInfoComponent } from './table-info/table-info.component';
import { VerifyComponent } from './verify/verify.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  // {redirectTo:'app',path:'',pathMatch:'full'},

{component:HomeComponent,path:'home'},
{component:RegiterComponent,path:'register'},
{component:VerifyComponent,path:'check'},
{component:TableInfoComponent,path:'details'},
{component:HomeComponent,path:'**'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



