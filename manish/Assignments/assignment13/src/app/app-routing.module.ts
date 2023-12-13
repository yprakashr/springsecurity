  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{path: '', component: MyHomeComponent},{path: 'about', component: MyAboutComponent},{path: 'home', component: MyHomeComponent},{path: 'contact', component: MyContactComponent}];

@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }