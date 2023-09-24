import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiFetchingService } from '../services/api-fetching.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../dialog-box-components/delete-dialog/delete-dialog.component';
import { EditBoxComponentComponent } from '../dialog-box-components/edit-box-component/edit-box-component.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert2';
import { User } from '../model/user.model';


@Component({
  selector: 'app-usersdatatable',
  templateUrl: './usersdatatable.component.html',
})
export class UsersdatatableComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private fetch: ApiFetchingService,
    private fb: FormBuilder
  ) {console.log("this is Constructor")}


  @ViewChild(MatSort) matSort: any;
  @ViewChild(MatPaginator) paginator: any;
  displayedColumns: string[] = [
    'fullname',
    'username',
    'gender',
    'phone',
    'edit',
    'delete',
  ];
  fullname:any;
  phone: any;
  age: any;
  gender: any;
  date: any;
  time: any;
model:object=new User();
  id: any;
  userDetails: any;
  popup: any;
  collapsed = true;
  token: any;
  Editdetails: any;

   suneeltest:Array<User> = [];

  ngOnInit(): void {
    this.gettingData();
    this.token = localStorage.getItem('token');
    console.log("this is ngOnInit")
  }

  public regForm = this.fb.group({
    fullname: [null, [Validators.required]],
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    gender: [null, [Validators.required]],
    phone: [null, [Validators.required]],
  });

  //******************* */ OnSubmit  data ***************************************

  onSubmit(data: any) {
    // console.warn(data);
  }

  filter(e: any) {
    this.userDetails.filter = e.target.value;
  }

  sort() {
    this.userDetails.sort = this.matSort;
  }

  //************************* */ fetching getting,Edit and delete********************************

  //*********** */ getting data*************************************

  gettingData() {
    this.fetch.getApi().subscribe((res: any) => {
      this.userDetails = new MatTableDataSource(res.body.data);
      this.userDetails.sort = this.matSort;
      this.userDetails.paginator = this.paginator;
    });
  }

  // ********************** delete data ****************************************************
  openDialog(id: any): void {
    this.id = id.id;
    this.fullname = id.fullname;
    const ref = this.dialog.open(DeleteDialogComponent, {
      width: 'auto',
      disableClose: true,
      data: {
        data: `${this.fullname}`,
      },
    });

    ref.afterClosed().subscribe((data: any) => {
      if (data.id) {
        this.fetch.deleteApi(this.id).subscribe((res: any) => {
          this.gettingData();
        });
      }
    });
  }

  // ************************** Edit data *************************************

  OpenForm(element: any) {
    this.fetch.getById(element.id).subscribe((res: any) => {
      this.suneeltest = res.body.data;
      const ref = this.dialog.open(EditBoxComponentComponent, {
        width: 'fit-content',
        height: 'fit-content',
        disableClose: true,
        data: {
          Fullname: `${this.suneeltest[0].fullname}`,
          Username: `${this.suneeltest[0].username}`,
          Phone: `${this.suneeltest[0].phone}`,
          Gender: `${this.suneeltest[0].gender}`,
          Email: `${this.suneeltest[0].email}`,
        }
      });
      ref.afterClosed().subscribe((data: any) => {

        if (data) {
          this.fetch
            .updateById(this.Editdetails.id, data)
            .subscribe((res: any) => {
              this.gettingData();
              swal.fire('Good job!', 'Now you can login!', 'success');
            });
        }
      });
    });
  }



  // ************************ session logout *************************
  logout() {
    // console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
