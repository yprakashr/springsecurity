import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ass15-contact-us',
  templateUrl: './ass15-contact-us.component.html',
  styleUrls: ['./ass15-contact-us.component.css'],
})
export class Ass15ContactUsComponent {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message: any;
  fileInfos: any;

  ngOnInit(){
    sessionStorage.setItem('currentURL','contact')
  }

  constructor(
    private http: UsersService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ContactForm = this.fb.group({
    fullname: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
        Validators.minLength(1),
        Validators.maxLength(50),
      ],
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
      ],
    ],
    message: ['', [Validators.maxLength(500)]],
    document: ['', [Validators.required]],
  });

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  contact(form: FormGroup) {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        if (this.currentFile.size / 1000 <= 1024) {
          this.http
            .sendEmailAttachment(
              'manishmachha@gmail.com',
              'TestMail',
              `${form.value.fullname} ${form.value.phone} ${form.value.message}`,
              this.currentFile
            )
            .subscribe(
              (res: any) => {
                console.log(res);
                if (res.status == 200) {
                  this.openSweetAlert(form.value.fullname);
                } else if (res.status == 413) {
                  this.openSnackBar('File size exceeded. Max size: 1024KB');
                } else {
                  this.openSnackBar('Something went wrong. Please try again.');
                }
              },
              (err) => {
                this.openSnackBar('File size exceeded. Max size: 1024KB');
                console.log(err);
              }
            );
        } else {
          this.openSnackBar('File size exceeded. Max size: 1024KB');
        }
      }
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
      panelClass: ['registerSnackbar'],
    });
  }

  openSweetAlert(name: string) {
    Swal.fire({
      title: 'Mail sent!',
      html: `<b style="color:blue">${name}</b> Keep going on. We'll reach out to you.`,
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace('');
      } else if (result.isDismissed) {
        window.location.replace('');
      }
    });
  }
}
