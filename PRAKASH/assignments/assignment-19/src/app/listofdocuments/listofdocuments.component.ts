import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export let MOCK_DATA=[
  {
    "id": 1,
    "name": "manish",
    "phone": "9773659667",
    "gender": "Female",
    "group": "Solventek"
  },
  {
    "id": 2,
    "name": "ashish",
    "phone": "8887387241",
    "gender": "Female",
    "group": "Google"
  },
  {
    "id": 3,
    "name": "prafull",
    "phone": "6082875404",
    "gender": "Male",
    "group": "Solventek"
  },
  {
    "id": 4,
    "name": "akash",
    "phone": "2772207887",
    "gender": "Female",
    "group": "Google"
  },
  {
    "id": 5,
    "name": "sidhhu",
    "phone": "9026209924",
    "gender": "Male",
    "group": "Solventek"
  },
  {
    "id": 6,
    "name": "mukesh",
    "phone": "9457072913",
    "gender": "Male",
    "group": "Google"
  },
  {
    "id": 7,
    "name": "ramu",
    "phone": "1564581245",
    "gender": "Female",
    "group": "HP"
  },
  {
    "id": 8,
    "name": "sundar",
    "phone": "5425871190",
    "gender": "Male",
    "group": "Eamia"
  },
  {
    "id": 9,
    "name": "virat",
    "phone": "1324713972",
    "gender": "Male",
    "group": "HP"
  },
  {
    "id": 10,
    "name": "sachin",
    "phone": "1824423153",
    "gender": "Female",
    "group": "HP"
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './listofdocuments.component.html',
  styleUrls: ['./listofdocuments.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
      transition(
        'expanded <=> void',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ListofdocumentsComponent implements OnInit, AfterViewInit {
  title = 'first-app';
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  columnsToDisplay = ['company'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: any | null;

  constructor(
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getGroups() {


    let Data: any[];

    // grouping by key
    Data = MOCK_DATA.reduce(function (r: any, a: any) {
      r[a.group] = r[a.group] || [];
      r[a.group].push(a);
      return r;
    }, Object.create(null));

    let converted_res = Object.entries(Data).map((user) => ({
      group_name: user[0],
      value: user[1],
    }));

    this.dataSource = new MatTableDataSource(converted_res);

  }
}
