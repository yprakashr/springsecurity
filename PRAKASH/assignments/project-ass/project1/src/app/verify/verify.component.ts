import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const token = params['token'];

      // Send the token to the backend for verification.
      this.http.get('/user/verify/' + token).subscribe(
        () => {
          alert('Email verification successful! You can now log in.');
          this.router.navigate(['/login']);
        },
        (error) => {
          alert('Email verification failed. Please try again.');
          this.router.navigate(['/reg']);
        }
      );
    });
  }
}
