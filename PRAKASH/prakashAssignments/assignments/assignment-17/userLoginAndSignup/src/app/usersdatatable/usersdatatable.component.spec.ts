<<<<<<< HEAD
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UsersdatatableComponent } from './usersdatatable.component';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { ApiFetchingService } from '../services/api-fetching.service';
// import { MatDialog } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { of } from 'rxjs';
// import { User } from '../model/user.model';

// describe('UsersdatatableComponent', () => {
//   let component: UsersdatatableComponent;
//   let fixture: ComponentFixture<UsersdatatableComponent>;
//   let authService: AuthService;
//   let router: Router;
//   let dialog: MatDialog;
//   let fetch: ApiFetchingService;
//   let fb: FormBuilder;

//   const user1: User = {
//     id: 1,
//     fullname: 'Test User 1',
//     username: 'testuser1',
//     password: 'testpassword',
//     gender: 'Male',
//     phone: '1234567890',
//     email: 'testuser1@test.com'
//   };

//   const user2: User = {
//     id: 2,
//     fullname: 'Test User 2',
//     username: 'testuser2',
//     password: 'testpassword',
//     gender: 'Female',
//     phone: '0987654321',
//     email: 'testuser2@test.com'
//   };

//   const mockApiFetchingService = {
//     getApi: () => {
//       const res = { body: { data: [user1, user2] } };
//       return of(res);
//     },
//     deleteApi: (id: any) => {
//       return of({});
//     },
//     getById: (id: any) => {
//       const res = { body: { data: [user1] } };
//       return of(res);
//     },
//     updateById: (id: any, data: any) => {
//       return of({});
//     }
//   };

//   const mockAuthService = {
//     logout: () => {}
//   };

//   const mockRouter = {
//     navigate: (path: any) => {}
//   };

//   const mockMatDialog = {
//     open: () => {
//       return {
//         afterClosed: () => {
//           return of({ id: 1 });
//         }
//       };
//     }
//   };

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [UsersdatatableComponent],
//       imports: [MatTableModule, MatPaginatorModule, MatSortModule, ReactiveFormsModule],
//       providers: [
//         { provide: AuthService, useValue: mockAuthService },
//         { provide: Router, useValue: mockRouter },
//         { provide: MatDialog, useValue: mockMatDialog },
//         { provide: ApiFetchingService, useValue: mockApiFetchingService },
//         FormBuilder
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UsersdatatableComponent);
//     component = fixture.componentInstance;
//     authService = TestBed.inject(AuthService);
//     router = TestBed.inject(Router);
//     dialog = TestBed.inject(MatDialog);
//     fetch = TestBed.inject(ApiFetchingService);
//     fb = TestBed.inject(FormBuilder);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch data on init', () => {
//     spyOn(fetch, 'getApi').and.callThrough();
//     component.ngOnInit();
//     expect(fetch.getApi).toHaveBeenCalled();
//     expect(component.userDetails.data.length).toEqual(2);
 
//   })
// })

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersdatatableComponent } from './usersdatatable.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiFetchingService } from '../services/api-fetching.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { User } from '../model/user.model';

describe('users Data table()',()=>{
  let component: UsersdatatableComponent;
  let fixture: ComponentFixture<UsersdatatableComponent>;
  let authService: AuthService;
  let router: Router;
  let dialog: MatDialog;
  let fetch: ApiFetchingService;
  let fb: FormBuilder;

    beforeEach(()=>{
        TestBed.configureTestingModule({
declarations:[UsersdatatableComponent],
imports:[ReactiveFormsModule,MatTableModule,MatSortModule,MatPaginatorModule],
providers:[Router,ApiFetchingService,FormBuilder,MatDialog]
        }).compileComponents
    })
beforeEach(()=>{
    fixture=TestBed.createComponent(UsersdatatableComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
})

it('',()=>{
    
})



})





=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersdatatableComponent } from './usersdatatable.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiFetchingService } from '../services/api-fetching.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';

describe('Users-Loign-PageComponent', () => {
  let component: UsersdatatableComponent;
  let fixture: ComponentFixture<UsersdatatableComponent>;
  let mockPostService = jasmine.createSpyObj([
    'postApi',
    'getApi',
    'getById',
    'updateById',
  ]);

  // let mockRouterService = jasmine.createSpyObj([]);
  let mockDailogService = jasmine.createSpyObj(['open']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersdatatableComponent],
      imports: [
        ReactiveFormsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        NgModule,
      ],
      providers: [
        { provide: ApiFetchingService, useValue: mockPostService },
        //{ provide: Router, useValue: mockRouterService },
        { provide: MatDialog, useValue: mockDailogService },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('try getting data is working or not', () => {
    // mockPostService.getApi.and.returnValue(of({}));
  });
  it('should call fetch.getApi()', () => {
    // Arrange
    const fetchMock = mockPostService.getApi.and.returnValue(
      of({ body: { data: [] } })
    );

    // Act
    component.gettingData();

    // Assert
    expect(fetchMock).toHaveBeenCalled();
  });
});
>>>>>>> e33854fa3076a2e9b5c6e3fce02c0730483a6ad7
