import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { SuccesspopupComponent } from './dailogeboxes/successpopup/successpopup.component';
import { ErrorpopupComponent } from './dailogeboxes/errorpopup/errorpopup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import {MatSelectModule} from '@angular/material/select';
import { ClickoutsideDirectiveDirective } from './clickoutside-directive.directive';
import { ComponentComponent } from './component/component.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SuccesspopupComponent,
    ErrorpopupComponent,
    DashboardComponent,
    MatSnackbarComponent,
    ClickoutsideDirectiveDirective,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000, // 15 seconds
      progressBar: true,
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
