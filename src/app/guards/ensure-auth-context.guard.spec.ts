import { TestBed, async, inject } from '@angular/core/testing';

import { EnsureAuthContextGuard } from './ensure-auth-context.guard';

describe('EnsureAuthContextGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureAuthContextGuard]
    });
  });

  it('should ...', inject([EnsureAuthContextGuard], (guard: EnsureAuthContextGuard) => {
    expect(guard).toBeTruthy();
  }));
});
