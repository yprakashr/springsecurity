import { Component } from '@angular/core';
import { AllPatientsService } from '../all-patients.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { ConfirmationDialogService } from '../confirmation-dialog.service';

export interface Patient {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  phone: string;
}

@Component({
  selector: 'app-ass14-patients',
  templateUrl: './ass14-patients.component.html',
  styleUrls: ['./ass14-patients.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class Ass14PatientsComponent {
  sessionValid = sessionStorage.getItem('session');
  edit: boolean = true;
  updateID: any = null;
  respStatus: any = 0;
  search: any = '';

  id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  phone: string;
  collapsed = false;

  dataSource: MatTableDataSource<Patient>;

  // edit form-group
  EditForm: FormGroup = this.fb.group({
    id: [''],
    firstname: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.minLength(1),
        Validators.maxLength(20),
      ],
    ],
    lastname: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.minLength(1),
        Validators.maxLength(20),
      ],
    ],
    age: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    phone: [
      '',
      [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
      ],
    ],
    gender: ['', [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
  });

  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'age',
    'gender',
    'date',
    'time',
    'phone',
    'edit',
    'delete',
  ];

  constructor(
    private patients: AllPatientsService,
    private _liveAnnouncer: LiveAnnouncer,
    private fb: FormBuilder,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  loadData() {
    this.patients.getPatients().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Patient>(res.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteData(id: any) {
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to delete ?')
      .then((confirm) => {
        this.patients.deletePatient(id).subscribe((res: any) => {
          this.loadData();
        });
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

  editData(id: any) {
    this.edit = false;
    this.patients.getPatientByID(id).subscribe((res: any) => {
      this.firstname = res.data.firstname;
      this.lastname = res.data.lastname;
      this.age = res.data.age;
      this.phone = res.data.phone;
      this.gender = res.data.gender;
      this.date = res.data.date;
      this.time = res.data.time;
      this.updateID = res.data.id;
    });
  }

  updateData(ID: any, form: FormGroup) {
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to update ?')
      .then((confirm) => {
        form.value.id = ID;
        this.patients
          .updatePatient(ID, form.value)
          .subscribe((response: any) => {
            this.respStatus = response.status;
            form.reset();
          });
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter() {
    this.dataSource.filter = this.search.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
