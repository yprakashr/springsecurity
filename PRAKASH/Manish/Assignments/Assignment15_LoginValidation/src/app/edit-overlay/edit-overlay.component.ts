import { Component, Injectable, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from '../confirmation-dialog.service';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-overlay',
  templateUrl: './edit-overlay.component.html',
  styleUrls: ['./edit-overlay.component.css'],
})
export class EditOverlayComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  @Input() uID: number;

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private users: UsersService,
    private confirmationDialogService: ConfirmationDialogService,
    private _snackBar: MatSnackBar
  ) {}

  respStatus: number = 0;
  updateID: any = null;
  id: number;

  // Edit form-group
  EditForm = this.fb.group({
    fullname: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.minLength(1),
        Validators.maxLength(100),
      ],
    ],
    phonenumber: [
      '',
      [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
      ],
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^\S*$/),
      ],
    ],
    gender: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^([a-zA-z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]{2,})$/),
      ],
    ],
    role: ['', [Validators.required]],
  });

  ngOnInit() {
    this.getUserdata(this.uID);

    document.getElementById('fullname')?.setAttribute('maxlength', '100');

    document
      .getElementById('fullname')
      ?.setAttribute('onkeydown', 'return /[a-zA-Z_ ]/i.test(event.key)');

    document
      .getElementById('phonenumber')
      ?.setAttribute('onkeydown', 'return /[0-9B]/i.test(event.key)');
  }

  public decline() {
    this.activeModal.dismiss(false);
  }

  public accept(ID: any, form: any) {
    var NAME: string = '';
    this.users.getUserByID(ID).subscribe((res: any) => {
      NAME = res.data.fullname;
      this.confirmationDialogService
        .confirm('Please confirm..', 'Do you really want to update ?', NAME)
        .then(() => {
          form.value.id = ID;
          this.users.updateUser(ID, form.value).subscribe(
            (response) => {
              this.respStatus = response.status;
              if (response.status == 200) {
                form.reset();
                this.activeModal.close(true);
                Swal.fire(
                  'Updated successfully',
                  `User <b style="color:blue">${NAME}</b> with ID <b style="color:blue">#${ID}</b> data is updated `,
                  'success'
                );
              } else {
                this.openSnackBar(
                  'Similar data conflict with current editing user data !'
                );
              }
            },
            (error) => {
              console.log('Error: ', error.message);
              this.decline();
              Swal.fire('Access denied', 'No rights to edit data', 'error');
            }
          );
        })
        .catch(() => {
          console.log('user dismissed');
        });
    });
  }

  public dismiss() {
    this.activeModal.dismiss(false);
  }

  getUserdata(id: number) {
    this.users.getUserByID(id).subscribe((res: any) => {
      this.updateID = res.data.id;
      this.EditForm.setValue({
        fullname: res.data.fullname,
        phonenumber: res.data.phonenumber,
        username: res.data.username,
        gender: res.data.gender,
        email: res.data.email,
        role: res.data.role,
      });
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['updateSnackbar'],
    });
  }

  togglePassword() {
    var passwordField = <HTMLInputElement>document.getElementById('password');

    if (passwordField!.type === 'password') {
      passwordField!.type = 'text';
    } else {
      passwordField!.type = 'password';
    }
  }
}
