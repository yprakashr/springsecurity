import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
token:any;
  constructor(private toastrService: ToastrService,private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {}

verified(){
this.route.params.subscribe(params => {
  this.token = params['token'];
  this.http.put(`http://localhost:8080/user/verify/${this.token}`,{}).subscribe({
  next:  (res) => {
      this.router.navigate(['/login']);
      this.toastrService.success("registered successfully! You can login now!");
    },
  error:  (error) => {
      console.log(error)
      this.router.navigate(['/reg']);
      this.toastrService.error("oops! Something went wrong. Please try again.");
    }
  }
   
  );
});}


}

