import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from '../users.service';
import { ConfirmationDialogService } from '../confirmation-dialog.service';
import { EditOverlayService } from '../edit-overlay.service';
import { AddUserService } from '../add-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

export interface User {
  id: number;
  fullname: string;
  username: string;
  password: string;
  phonenumber: string;
  gender: string;
}

@Component({
  selector: 'app-ass15-users',
  templateUrl: './ass15-users.component.html',
  styleUrls: ['./ass15-users.component.css'],
})
export class Ass15UsersComponent {
  constructor(
    private users: UsersService,
    private confirmationDialogService: ConfirmationDialogService,
    private editOverlayService: EditOverlayService,
    private addUserService: AddUserService,
    private _liveAnnouncer: LiveAnnouncer,
    private _snackBar: MatSnackBar
  ) {}

  sessionValid = sessionStorage.getItem('session');
  updateID: any = null;
  search: any = '';
  userRole: any = sessionStorage.getItem('role');
  dataSource: MatTableDataSource<User>;

  displayedColumns: string[];

  ngOnInit() {
    sessionStorage.setItem('currentURL', 'users');
    this.loadData();

    if (this.userRole == 'ROLE_ADMIN') {
      this.displayedColumns = [
        'id',
        'fullname',
        'username',
        'gender',
        'phonenumber',
        'email',
        'role',
        'edit',
        'delete',
      ];
    } else {
      this.displayedColumns = [
        'id',
        'fullname',
        'username',
        'gender',
        'phonenumber',
        'email',
      ];
    }
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  loadData() {
    this.users.getUsers().subscribe((res: any) => {
      var TableData = res.data;

      for (var i = 0; i < TableData.length; i++) {
        delete TableData[i].password;
      }

      this.dataSource = new MatTableDataSource<User>(TableData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteUser(id: any) {
    var NAME: string = '';
    this.users.getUserByID(id).subscribe((res: any) => {
      NAME = res.data.fullname;
      this.OpenDeleteDialog(id, NAME);
    });
  }

  editUser(id: any) {
    this.editOverlayService
      .confirm(id)
      .then(() => {
        this.loadData();
      })
      .catch(() => {
        console.log('user cancelled dialog');
      });
  }

  AddUser() {
    this.addUserService
      .confirm()
      .then(() => {
        this.loadData();
      })
      .catch(() => {
        console.log('user cancelled dialog');
      });
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

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
      panelClass: ['registerSnackbar'],
    });
  }

  OpenDeleteDialog(id: number, NAME: string) {
    Swal.fire({
      title: 'Are you sure ?',
      html: `You want to <b style="color:red">delete</b> <b style="color:blue">${NAME}</b> with ID <b style="color:blue">#${id}</b>`,
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.users.deleteUser(id).subscribe(
          (res) => {
            this.loadData();
            Swal.fire(
              'Deleted successfully',
              `User <b style="color:blue">${NAME}</b> with ID <b style="color:blue">#${id}</b> data is deleted`,
              'success'
            );
          },
          (error) => {
            console.log('Error: ', error.message);
            Swal.fire('Access denied', 'No rights to delete', 'error');
          }
        );
      }
    });
  }
}
