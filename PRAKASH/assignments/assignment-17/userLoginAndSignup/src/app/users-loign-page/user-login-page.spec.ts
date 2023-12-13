// // import { Component } from '@angular/core';
// // import { UsersLoignPageComponent } from './users-loign-page.component';
// // import { ComponentFixture, TestBed } from '@angular/core/testing';
// // import { AuthService } from '../services/auth.service';
// // import { FormBuilder } from '@angular/forms';
// // import { ApiFetchingService } from '../services/api-fetching.service';
// // import { Router } from '@angular/router';

// // describe('Posts Component', () => {
// //   let fixture: ComponentFixture<UsersLoignPageComponent>;
// //   let comp: UsersLoignPageComponent;

// //   beforeEach(() => {
// //     const POST = [
// //       { id: 1, body: 'body 1', title: 'title 1' },
// //       { id: 2, body: 'body 2', title: 'title 2' },
// //       { id: 3, body: 'body 3', title: 'title 3' },
// //     ];
// //     const mockuserlogin = jasmine.createSpyObj([
// //       'onSubmit',
// //       'forgotPassword',
// //       'passwordValid',
// //       'loginDetails',
// //     ]);

// //     //
// //     // const mockauthservice = jasmine.createSpyObj([]);
// //     // const component = new UsersLoignPageComponent(mockuserlogin);
// //   });
// //   const mockauthservice = jasmine.createSpyObj(ApiFetchingService, []);
// //   const mockformBuilder = jasmine.createSpyObj(FormBuilder, []);
// //   const router = jasmine.createSpyObj(Router, ['forgotPassword']);
// //   const mockfetchservice = jasmine.createSpyObj(ApiFetchingService, [
// //     'onSubmit',
// //     'loginDetails',
// //   ]);

// //   TestBed.configureTestingModule({
// //     declarations: [UsersLoignPageComponent],
// //     providers: [
// //       { provide: Router, useValue: router },
// //       { provide: ApiFetchingService, useValue: mockfetchservice },
// //       // { provide: Router, useValue: mockauthservice },
// //       { provide: AuthService, useValue: mockauthservice },
// //     ],
// //   });
// //   fixture = TestBed.createComponent(UsersLoignPageComponent);
// // });


// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { UsersLoignPageComponent } from './users-loign-page.component';
// import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
// import { ApiFetchingService } from "../services/api-fetching.service";
// import { Router } from "@angular/router";
// import { By } from "@angular/platform-browser";

// describe('Users-Loign-PageComponent',()=>{
//    let component:UsersLoignPageComponent;
//     let fixture: ComponentFixture<UsersLoignPageComponent>;
//     let mockPostService = jasmine.createSpyObj(['postApi', 'getApi','getById','updateById']);
//     // let mockRouterService = jasmine.createSpyObj([]);

//     beforeEach(()=>{
//         TestBed.configureTestingModule({
//             declarations:[UsersLoignPageComponent],
//             imports:[ReactiveFormsModule],
//             providers:[
//                 {provide:ApiFetchingService,
//                 useValue:mockPostService}
//                 ]
//         }).compileComponents
//     });
//     beforeEach(()=>{
//         fixture=TestBed.createComponent(UsersLoignPageComponent);
//          component=fixture.componentInstance;
//         fixture.detectChanges();
//     })

//     it('Reactive form Validation - Firstnamecheck',()=>{ 
//     let fullname=component.regForm.controls['fullname'];
//     expect(fullname.valid).toBeFalsy();
//     expect(fullname.errors['required']).toBeTruthy();
//     });

//     it('Reactive form Validation - set full name',()=>{ 
//         let fullname=component.regForm.controls['fullname'];
//         fullname.setValue('prakash');
//         expect(fullname.valid).toBeTruthy();
//         expect(fullname.value).toEqual('prakash');
//         });
//         it('Reactive form Validation - email pattern',()=>{ 
//             let email=component.regForm.controls['email'];
//             email.setValue('prakash');
//             expect(email.valid).toBeFalsy();
//             expect(email.errors['pattern']).toBeTruthy();
//             });
//             it('Reactive form Validation - email pattern',()=>{ 
//                 let email=component.regForm.controls['email'];
//                 email.setValue('prakash');
//                 expect(email.valid).toBeFalsy();
//                 expect(email.errors['pattern']).toBeTruthy();
//                 });
//                 it('Reactive form Validation - form submit check',()=>{ 
//                     expect(component.regForm.invalid).toBeTruthy();
//                     let btn= fixture.debugElement.query(By.css('input[type=submit]'))
//                     component.regForm.controls['fullname'].setValue('yallamarthi');
//                     component.regForm.controls['username'].setValue('prakash');
//                     component.regForm.controls['gender'].setValue('male');
//                     component.regForm.controls['password'].setValue('YPRssp78@');
//                     component.regForm.controls['phone'].setValue(8106405102);
//                     component.regForm.controls['confirmpassword'].setValue('YRssp78@');
//                     component.regForm.controls['email'].setValue('yprakashr@gmail.com');                    
//                     component.onSubmit;
//                     expect(component.regForm.value).toEqual(component.regForm.value);
//                     });
                   
                        
//   it('should calculate password strength and set strength properties', () => {
//     // set password to test
//     component.Password = 'Abcdef1#';

//     // call function
//     component.checkPasswordStrength();

//     // assert strength properties are set correctly
//     expect(component.strength).toEqual(5);
//     expect(component.strengthText).toEqual('Very strong');
//     expect(component.strengthClass).toEqual('strength-5');
//   });

// //   it('should calculate password strength and set strength properties', () => {
// //     // set password to test


// //     // call function
    

// //     // assert strength properties are set correctly
  
// //   });
                      
// });




