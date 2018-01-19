import { TestBed, async, inject } from '@angular/core/testing';

import { ServiceCallExistsGuard } from './service-call-exists.guard';

describe('ServiceCallExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCallExistsGuard]
    });
  });

  it('should ...', inject([ServiceCallExistsGuard], (guard: ServiceCallExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
