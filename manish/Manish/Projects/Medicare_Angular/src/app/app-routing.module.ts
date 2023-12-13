import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ass14ExistingComponent } from './ass14-existing/ass14-existing.component';
import { Ass14HomeComponent } from './ass14-home/ass14-home.component';
import { Ass14NewComponent } from './ass14-new/ass14-new.component';
import { Ass14PatientsComponent } from './ass14-patients/ass14-patients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Ass14LoginComponent } from './ass14-login/ass14-login.component';

const routes: Routes = [
  { path: '', component: Ass14HomeComponent },
  { path: 'home', component: Ass14HomeComponent },
  { path: 'existing', component: Ass14ExistingComponent },
  { path: 'new', component: Ass14NewComponent },
  { path: 'patients', component: Ass14PatientsComponent },
  { path: 'login', component: Ass14LoginComponent }
];

@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
