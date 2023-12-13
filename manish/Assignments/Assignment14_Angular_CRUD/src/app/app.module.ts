import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ass14HeaderComponent } from './ass14-header/ass14-header.component';
import { Ass14NavbarComponent } from './ass14-navbar/ass14-navbar.component';
import { Ass14ExistingComponent } from './ass14-existing/ass14-existing.component';
import { Ass14NewComponent } from './ass14-new/ass14-new.component';
import { Ass14PatientsComponent } from './ass14-patients/ass14-patients.component';
import { Ass14FooterComponent } from './ass14-footer/ass14-footer.component';
import { Ass14HomeComponent } from './ass14-home/ass14-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ass14LoginComponent } from './ass14-login/ass14-login.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from './confirmation-dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    Ass14HeaderComponent,
    Ass14NavbarComponent,
    Ass14ExistingComponent,
    Ass14NewComponent,
    Ass14PatientsComponent,
    Ass14FooterComponent,
    Ass14HomeComponent,
    Ass14LoginComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
