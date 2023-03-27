import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsershomepageComponent } from './usershomepage/usershomepage.component';
import { UsersLoignPageComponent } from './users-loign-page/users-loign-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersdatatableComponent } from './usersdatatable/usersdatatable.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './dialog-box-components/delete-dialog/delete-dialog.component';
import { EditBoxComponentComponent } from './dialog-box-components/edit-box-component/edit-box-component.component';
import { AuthGuard } from './guards/auth.guard';
import { NewModuleModule } from './new-module/new-module.module';
import { ComparePasswordDirective } from './compare-password.directive';
import { EmailForForgotpasswordComponent } from './email-for-forgotpassword/email-for-forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HeaderComponent } from './header/header.component';
import { XhrInetrceptorInterceptor } from './interceptor/xhr-inetrceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsershomepageComponent,
    UsersLoignPageComponent,
    UsersdatatableComponent,
    DeleteDialogComponent,
    EditBoxComponentComponent,
    ComparePasswordDirective,
    EmailForForgotpasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    NewModuleModule
  ],
  providers: [  {
    provide : HTTP_INTERCEPTORS,
    useClass : XhrInetrceptorInterceptor,
    multi : true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
