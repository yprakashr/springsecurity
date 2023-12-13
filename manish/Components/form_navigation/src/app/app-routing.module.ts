import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { CareerComponent } from './components/career/career.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { EducationComponent } from './components/education/education.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

const routes: Routes = [
  { path: '', redirectTo:'personal-details',pathMatch:'full' },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'address', component: AddressComponent },
  { path: 'career', component: CareerComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
