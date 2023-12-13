import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-practice-component',
  templateUrl: './practice-component.component.html',
  styleUrls: ['./practice-component.component.css'],
})
export class PracticeComponentComponent {
  constructor(private apiservice: ApiServiceService) {
    this.getWorkflowName();
    this.getBotName();
  }

  @ViewChild('searchInputFirst') searchInputFirst!: ElementRef<any>;
  @ViewChild('searchInputSecond') searchInputSecond!: ElementRef<any>;
  @ViewChild('contentFirst') contentFirst!: ElementRef<any>;
  @ViewChild('contentSecond') contentSecond!: ElementRef<any>;

  getBotName() {
    this.apiservice.getBot().subscribe({
      next: (response: any) => {
        for (let item of response) {
          this.countriesSecond.push(item.name);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  // -----------------------------------work Flow Name--------------------------------------------

  getWorkflowName() {
    this.apiservice.getWorkflows().subscribe({
      next: (response: any) => {
        for (let item of response) {
          this.countriesFirst.push(item.workflowName);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  countriesFirst: any[] = [];
  countriesSecond: any[] = [];
  selectedCountry = '';
  selectedCountrySecond = '';
  isWrapperActive = false;
  isWrapperActiveSecond = false;

  toggleWrapper(type: string) {
    if (type === 'first') {
      this.isWrapperActive = !this.isWrapperActive;
      if (!this.isWrapperActive) {
        this.searchInputFirst.nativeElement.value = '';
      }
    } else if (type === 'second') {
      this.isWrapperActiveSecond = !this.isWrapperActiveSecond;
      if (!this.isWrapperActiveSecond) {
        this.searchInputSecond.nativeElement.value = '';
      }
    }
  }

  searchCountry(searchWord: string, type: string) {
    if (type === 'first') {
      return this.countriesFirst.filter((data) =>
        data.toLowerCase().startsWith(searchWord.toLowerCase())
      );
    } else if (type === 'second') {
      return this.countriesSecond.filter((data) =>
        data.toLowerCase().startsWith(searchWord.toLowerCase())
      );
    }
    return [];
  }

  updateName(selectedCountry: string, type: string) {
    if (type === 'first') {
      this.selectedCountry = selectedCountry;
      this.toggleWrapper('first');
    } else if (type === 'second') {
      this.selectedCountrySecond = selectedCountry;
      this.toggleWrapper('second');
    }
  }
}
