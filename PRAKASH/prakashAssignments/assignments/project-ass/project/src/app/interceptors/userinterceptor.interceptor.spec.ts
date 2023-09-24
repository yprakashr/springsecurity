import { TestBed } from '@angular/core/testing';

import { UserinterceptorInterceptor } from './userinterceptor.interceptor';

describe('UserinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UserinterceptorInterceptor = TestBed.inject(UserinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
