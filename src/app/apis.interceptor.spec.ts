import { TestBed } from '@angular/core/testing';

import { ApisInterceptor } from './apis.interceptor';

describe('ApisInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApisInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApisInterceptor = TestBed.inject(ApisInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
