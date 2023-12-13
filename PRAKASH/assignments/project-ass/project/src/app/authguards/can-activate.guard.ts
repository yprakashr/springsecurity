import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  let isloggedin=JSON.parse(localStorage.getItem('isLoggedIn') || '{}');
  let router=inject(Router);
  console.log(isloggedin)
  if(isloggedin){
    return true;
  }else{
    router.navigate(['/login']);
    return false
  }

 

}



