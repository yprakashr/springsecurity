import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NewModuleModule { 
  constructor(){
    console.log("this is new Module");
  }
}
