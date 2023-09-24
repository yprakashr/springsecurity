import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ProgramerModalComponent } from '../programer-modal/programer-modal.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormSubmitService } from '../form-submit.service';
import { AppLoaderService } from '../apploader/apploader.service';
import { DummyCompComponent } from '../Dictionary-FormDetail/dictionary-FormDetail.component';
import { projects } from '../util/pojo.models';
import { ProjectdeletedailogComponent } from '../projectdeletedailog/projectdeletedailog.component';


@Component({
  selector: 'app-programdata',
  templateUrl: './programdata.component.html',
  styleUrls: ['./programdata.component.css']
})
export class ProgramdataComponent implements AfterViewInit, OnInit  {


    constructor(public modalDialog: MatDialog,public formsubmit: FormSubmitService, private loader: AppLoaderService){}
  public isCollapsed = false;
  projectsData: Array<projects> = [];
  dataSource!: MatTableDataSource<any>;


  ngOnInit() {
    this.getProgramsData();
    
  }
  OpenModal():void{
    const dialogRef = this.modalDialog.open(ProgramerModalComponent, {
      width: '30%',
      height: '60%',
    });
  }

getProgramsData(){
  this.loader.open("Please Wait......");
    this.formsubmit.getProgramsList().subscribe({
      next: (resp: any) => {
        this.projectsData=resp.data; 
        this.dataSource = new MatTableDataSource(this.projectsData);
        this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
        this.loader.close();
      },
      error: (err: any) => {
       console.log(err);
        this.loader.close();
      }
    })
  }
  // openDialog(){

  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort)
  sort!:MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    console.log(this.projectsData)
    
  }
  displayedColumns = [
    'name',
    'description',
    'cdate',
    'actions',
  ];

  openeditprograms(program:any){
    console.log(program);
    const dialogRef = this.modalDialog.open(ProgramerModalComponent, {
      width: '30%',
      height: '60%',
      data :program
    });
  }

  opendeleteprogram(program:any){
    console.log(program);
    const dialogRef = this.modalDialog.open(ProjectdeletedailogComponent, {
      width: '30%',
      height: '60%',
      data :program
    });
  }

  datadefine(program:any){
    console.log(program);
    const dialogRef = this.modalDialog.open(DummyCompComponent, {
      width: '80%',
      height: '70%',
      data: program.name
    });
  }
}

export interface PeriodicElement {
  name: string;
  description: string;
  createddate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {  name: 'ICICI', description: 'ICICI Bank Program', createddate: '10/21/2021 ' },
  {  name: 'HDFC', description: 'HDFC Bank Program', createddate: '10/21/2021 '},
  {  name: 'LIC', description: 'LIC  Program', createddate: '10/21/2021 ' },
  {  name: 'Kotak', description: 'Kotak Bank Program', createddate: '10/21/2021 ' },
  {  name: 'EPF', description: 'EPF Bank Program', createddate: '10/21/2021 '},
  {  name: 'CYK', description: 'CYK Bank Program', createddate: '10/21/2021 ' },
  {  name: 'New Program', description: 'New Program', createddate: '10/21/2021 ' },
  {  name: 'Test', description: 'Test Program', createddate: '10/21/2021 '},
  {  name: 'Fluorine', description: 'Fluorine Program', createddate: '10/21/2021 ' },
  {   name: 'Neon', description: 'Neon Program', createddate: '10/21/2021 ' },
];



