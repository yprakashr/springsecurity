import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ChartsComponent } from './charts/charts.component';
import { StatusRunsComponent } from './status-runs/status-runs.component';

const routes: Routes = [
  { path: '',redirectTo:'login' ,pathMatch:'full' },
  { path: 'login', component:LoginComponent},
  { path: 'sche', component: SchedulerComponent},
  { path: 'dash', component: ChartsComponent},
  { path: 'statusrun', component: StatusRunsComponent },
  // { path: 'dash', component: SidenavBarComponent}
  // { path:'schedule',component:ScheduleComponent},
  // { path:'schedulecon',component:ScheduleconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
