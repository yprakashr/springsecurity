import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { JobProfileComponent } from './job-profile/job-profile.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { TechnicalComponent } from './technical/technical.component';

const routes: Routes = [
{ path: '',   redirectTo: 'personal', pathMatch: 'full' },
{path:'personal',component:PersonalInfoComponent},
{path:'job',component:JobProfileComponent},
{path:'qualify',component:QualificationComponent},
{path:'skill',component:SkillSetComponent},
{path:'tech',component:TechnicalComponent},
{path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
