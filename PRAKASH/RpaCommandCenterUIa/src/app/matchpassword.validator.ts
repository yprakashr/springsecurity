import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const matchpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let password = control.get('password');
     let confirmpassword = control.get('cpassword');
     let password1 = control.get('confirmpassword');
     let confirmpassword1   = control.get('cfpassword');
     if(password && confirmpassword && password?.value != confirmpassword?.value||password1 && confirmpassword1 && password1?.value != confirmpassword1?.value){
        return {
            passwordmatcherror : true }
     }
    return null; 
   }