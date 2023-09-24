import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { JobprofileComponent } from './jobprofile/jobprofile.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { QualificationComponent } from './qualification/qualification.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal' },
  {
    path: 'workflow',
    component: WorkflowComponent,
  },
  {
    path: 'executions',
    component: QualificationComponent,
  },
  {
    path: 'schedule',
    component: AddressComponent,
  },
  {
    path: 'jobprofile',
    component: JobprofileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
