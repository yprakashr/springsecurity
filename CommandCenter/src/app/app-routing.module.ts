import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ChartsComponent } from './charts/charts.component';
import { StatusRunsComponent } from './status-runs/status-runs.component';
import { WorkflowsComponent } from './workflows/workflows.component';
import { PracticeComponent } from './Scheduler2/practice.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'schedule', component: PracticeComponent },
  { path: 'report', component: ChartsComponent },
  { path: 'statusrun', component: StatusRunsComponent },
  { path: 'workflow/:id', component: WorkflowsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
