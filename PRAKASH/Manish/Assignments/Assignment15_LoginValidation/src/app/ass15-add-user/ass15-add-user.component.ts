import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from '../confirmation-dialog.service';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-overlay',
  templateUrl: './ass15-add-user.component.html',
  styleUrls: ['./ass15-add-user.component.css'],
})
export class Ass15AddUserComponent {
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
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*_?&])[A-Za-z\d@$#!%*_?&]*$/
        ),
        Validators.maxLength(30),
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
    this.EditForm.value.role = '';

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

  public accept(form: any) {
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to Add user ?', '')
      .then(() => {
        var submitVal = true;

        this.users
          .getUserByEmail(form.get('email').value)
          .subscribe((res: any) => {
            if (res.status == 200) {
              if (res.data[0].email == form.get('email').value) {
                this.openSnackBar(
                  'An account with this email already exists. Please try another'
                );
                submitVal = false;
              }
            }
          });

        if (submitVal) {
          this.users
            .getUserByUsername(form.get('username').value)
            .subscribe((res: any) => {
              if (res.status == 200) {
                if (res.data[0].username == form.get('username').value) {
                  this.openSnackBar(
                    'An account with this username already exists. Please try another'
                  );
                  submitVal = false;
                }
              }
            });
        }

        if (submitVal) {
          this.users
            .getUserByPhone(form.get('phonenumber').value)
            .subscribe((res: any) => {
              if (res.status == 200) {
                if (res.data[0].phonenumber == form.get('phonenumber').value) {
                  this.openSnackBar(
                    'An account with this phonenumber already exists. Please try another'
                  );
                  submitVal = false;
                }
              }
            });
        }

        if (submitVal) {
          this.users.saveUser(form.value).subscribe((res: any) => {
            form.reset();
            this.activeModal.close(true);
            Swal.fire('User added successfully', '', 'success');
          });
        }
      })
      .catch(() => {
        console.log('user dismissed');
      });
  }

  public dismiss() {
    this.activeModal.dismiss(false);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
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
