import { TestBed } from '@angular/core/testing';

import { XhrInetrceptorInterceptor } from './xhr-inetrceptor.interceptor';

describe('XhrInetrceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      XhrInetrceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: XhrInetrceptorInterceptor = TestBed.inject(XhrInetrceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
