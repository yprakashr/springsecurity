import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {
  ScheduleModule,
  RecurrenceEditorModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {
  CalendarModule,
  DatePickerModule,
  TimePickerModule,
  DateRangePickerModule,
  DateTimePickerModule,
} from '@syncfusion/ej2-angular-calendars';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ChartsComponent } from './charts/charts.component';
import { StatusRunsComponent } from './status-runs/status-runs.component';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, AsyncPipe, JsonPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { WorkflowsComponent } from './workflows/workflows.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { PracticeComponent } from './Scheduler2/practice.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { ScheduledataconfirmboxComponent } from './daillogboxes/scheduledataconfirmbox/scheduledataconfirmbox.component';
import { ToastrModule } from 'ngx-toastr';
import { IgxDatePickerModule, IgxTimePickerModule } from 'igniteui-angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomReoccuranceComponent } from './daillogboxes/custom-reoccurance/custom-reoccurance.component';
import { ApploaderComponent } from './apploader/apploader.component';
import { CustomDateEventsComponent } from './practice-components/custom-date-events/custom-date-events.component';
import { PracticeComponentComponent } from './practice-components/practice-component/practice-component.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchedulerComponent,
    SidenavBarComponent,
    ChartsComponent,
    StatusRunsComponent,
    WorkflowsComponent,
    PracticeComponent,
    ScheduledataconfirmboxComponent,
    SelectboxComponent,
    CustomReoccuranceComponent,
    ApploaderComponent,
    CustomDateEventsComponent,
    PracticeComponentComponent,
  ],
  imports: [
    NgSelectModule,
    MatCheckboxModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    MatSortModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    NgFor,
    AsyncPipe,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    FullCalendarModule,
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
    CdkAccordionModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    // NgxMatTimepickerModule,
    // CodeViewerComponent,
    // NgxMatTimepickerDemoComponent,
    // NgxMatTimepickerTestComponent,
    // NgxMatTimepickerTestDialogComponent
    // TimePickerModule.forRoot(),
    ToastrModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  providers: [
    ApiServiceService,
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
    provideAnimations(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
