import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-ass15-register',
  templateUrl: './ass15-register.component.html',
  styleUrls: ['./ass15-register.component.css'],
})
export class Ass15RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private user_service: UsersService,
    private _snackBar: MatSnackBar
  ) {}

  respStatus: any = 0;
  isPasswordMatch: boolean = false;
  session: any = sessionStorage.getItem('session');

  // Register form-group
  RegisterForm = this.fb.group({
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
    gender: ['', [Validators.required]],
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
    conf_password: [
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
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^([a-zA-z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]{2,})$/),
      ],
    ],
  });

  ngOnInit() {
    sessionStorage.setItem('currentURL', 'register');
    if (this.session) {
      window.location.replace('users');
    }

    document.getElementById('fullname')?.setAttribute('maxlength', '100');

    document
      .getElementById('fullname')
      ?.setAttribute('onkeydown', 'return /[a-zA-Z_ ]/i.test(event.key)');

    document
      .getElementById('phonenumber')
      ?.setAttribute('onkeydown', 'return /[0-9B]/i.test(event.key)');
  }

  saveUser(form: any) {
    var submitVal = true;

    this.user_service
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
      this.user_service
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
      this.user_service
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
      if (form.get('password').value != form.get('conf_password').value) {
        this.openSnackBar("Passwords won't match ");
        submitVal = false;
      }
    }

    if (submitVal) {
      this.user_service.saveUser(form.value).subscribe((res: any) => {
        this.openSweetAlert(form.value.fullname);
        form.reset();
      });
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
      panelClass: ['registerSnackbar'],
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

  openSweetAlert(name: string) {
    Swal.fire({
      title: 'Signup successful',
      html: `<b style="color:blue">${name}</b> now you can login to your account`,
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace('login');
      } else if (result.isDismissed) {
        window.location.replace('login');
      }
    });
  }
}
