import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from './calendar/calendar.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ChartsComponent } from './charts/charts.component';
import { StatusRunsComponent } from './status-runs/status-runs.component';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchedulerComponent,
    CalendarComponent,
    SidenavBarComponent,
    ChartsComponent,
    StatusRunsComponent,
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatPaginatorModule,
    ScheduleModule,
    MatTableModule,
    RecurrenceEditorModule,
    CalendarModule,
    MatFormFieldModule,
    DatePickerModule,
    TimePickerModule,
    DateRangePickerModule,
    DateTimePickerModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    // MdbAccordionModule,
    // MdbCarouselModule, MdbCheckboxModule, MdbCollapseModule, MdbDropdownModule, MdbFormsModule,
    // MdbModalModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbScrollspyModule,
    // MdbTabsModule, MdbTooltipModule, MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [ApiServiceService,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
