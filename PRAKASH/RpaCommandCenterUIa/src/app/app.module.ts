import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SuccesspopupComponent } from './dailogeboxes/successpopup/successpopup.component';
import { ErrorpopupComponent } from './dailogeboxes/errorpopup/errorpopup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { VerifyComponent } from './verify/verify.component';
import { UserinterceptorInterceptor } from './interceptors/userinterceptor.interceptor';
import { ScheduleComponent } from './schedule/schedule.component';
import { ButtonModule } from '@smart-webcomponents-angular/button';
import { CalendarModule } from '@smart-webcomponents-angular/calendar';
import { InputModule } from '@smart-webcomponents-angular/input';
import { TreeModule } from '@smart-webcomponents-angular/tree';
import { SchedulerModule } from '@smart-webcomponents-angular/scheduler';
import { ApploaderComponent } from './sharedComponents/apploader/apploader.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ScheduleconComponent } from './schedulecon/schedulecon.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'  
import { DatePipe } from '@angular/common';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ApploaderComponent,
    SuccesspopupComponent,
    ForgotPasswordComponent,
    ErrorpopupComponent,
    DashboardComponent,
    MatSnackbarComponent,
    VerifyComponent,
    ScheduleComponent,
    ScheduleconComponent,
    DeleteeventComponent,
    UpdateeventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    AppRoutingModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ButtonModule,
     CalendarModule,
      InputModule, 
      TreeModule, 
      SchedulerModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000, // 15 seconds
      progressBar: true,
      preventDuplicates: true
    }),
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserinterceptorInterceptor,
      multi: true,
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





