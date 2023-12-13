import {
  Component,
  OnInit,
  Input,
  forwardRef,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiServiceService } from '../services/api-service.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

export interface User {
  name: string;
}

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css'],
})
export class SelectboxComponent {
  constructor(private apiservice: ApiServiceService){}
  botName: any = [];
  workFlowName: any=[];
  myControl1 = new FormControl();
  filteredOptions1: any;
  myControl2 = new FormControl();
  filteredOptions2: any;


  ngOnInit() {
    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value))
    );
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value))
    );
    this.getBotName();
    this.getWorkflowName();
  }

  private _filter1(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.workFlowName.filter((option:any) => option.workflowName.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.botName.filter((option:any) => option.name.toLowerCase().includes(filterValue));
  }

  getBotName() {
    this.apiservice.getBot().subscribe({
      next: (response: any) => {
        this.botName = response;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }


  getWorkflowName() {
    this.apiservice.getWorkflows().subscribe({
      next: (response: any) => {
        this.workFlowName = response;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

}
