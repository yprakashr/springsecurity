import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyFooterComponent } from './my-footer/my-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    MyHeaderComponent,
    MyAboutComponent,
    MyContactComponent,
    MyHomeComponent,
    MyFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
