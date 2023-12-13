import { TestBed } from '@angular/core/testing';
import { ApiFetchingService } from './api-fetching.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

describe('API--fetching service', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  
  it('can test HttpClient.get', () => {
    let testUrl = '/data';
    const testData: Data = { name: 'Test Data' };

    httpClient
      .get<Data>(testUrl)
      .subscribe((data) => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne('/data');

    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();
  });
  afterEach(() => {
    httpTestingController.verify();
  });
});
















