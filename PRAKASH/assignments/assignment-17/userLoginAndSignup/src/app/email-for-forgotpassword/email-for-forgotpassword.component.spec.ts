// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { EmailForForgotpasswordComponent } from "./email-for-forgotpassword.component";
// import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
// import { ApiFetchingService } from "../services/api-fetching.service";
// import { Router } from "@angular/router";

// describe('EmailForForgotpasswordComponent()',()=>{
//    let component:EmailForForgotpasswordComponent;
//     let fixture: ComponentFixture<EmailForForgotpasswordComponent>;
//     let mockPostService = jasmine.createSpyObj(['postApi', 'getApi','getById','updateById','deleteApi','fetchApipost']);
//     let mockRouterService = jasmine.createSpyObj([]);
//     beforeEach(async()=>{
//         TestBed.configureTestingModule({
//             declarations:[EmailForForgotpasswordComponent],
//             imports:[ReactiveFormsModule],
//             providers:[{provide:ApiFetchingService,
//                                 useValue:mockPostService}
                
//                 ,FormBuilder,Router]
//         })
//             .compileComponents
//     });
//     beforeEach(()=>{
//         fixture=TestBed.createComponent(EmailForForgotpasswordComponent);
//          component=fixture.componentInstance;
//         fixture.detectChanges();
//     })
//     it('Reactive form Validation - Firstnamecheck',()=>{ 


//     });
// });