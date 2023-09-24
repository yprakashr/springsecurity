import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ass15HeaderComponent } from './ass15-header/ass15-header.component';
import { Ass15NavbarComponent } from './ass15-navbar/ass15-navbar.component';
import { Ass15FooterComponent } from './ass15-footer/ass15-footer.component';
import { Ass15HomeComponent } from './ass15-home/ass15-home.component';
import { Ass15LoginComponent } from './ass15-login/ass15-login.component';
import { Ass15UsersComponent } from './ass15-users/ass15-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ass15RegisterComponent } from './ass15-register/ass15-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditOverlayComponent } from './edit-overlay/edit-overlay.component';
import { Ass15MyaccountComponent } from './ass15-myaccount/ass15-myaccount.component';
import { NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Ass15AddUserComponent } from './ass15-add-user/ass15-add-user.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ass15AccRecoveryComponent } from './ass15-acc-recovery/ass15-acc-recovery.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Ass15ContactUsComponent } from './ass15-contact-us/ass15-contact-us.component';
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { LoaderService } from './loader.service';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Ass15HeaderComponent,
    Ass15NavbarComponent,
    Ass15FooterComponent,
    Ass15HomeComponent,
    Ass15LoginComponent,
    Ass15UsersComponent,
    Ass15RegisterComponent,
    ConfirmationDialogComponent,
    EditOverlayComponent,
    Ass15MyaccountComponent,
    Ass15AddUserComponent,
    Ass15AccRecoveryComponent,
    Ass15ContactUsComponent,
    MyLoaderComponent,
    MyLoaderComponent,
    LogincomponentComponent,
  ],
  imports: [
    SweetAlert2Module,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgbToastModule,
    MatTooltipModule,
    NgbTooltipModule,
  ],
  providers: [
    MatSnackBar,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
