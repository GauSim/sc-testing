import { TestBed, async, inject } from '@angular/core/testing';

import { EnsureItemGuard } from './ensure-item.guard';

describe('ServiceCallExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureItemGuard]
    });
  });

  it('should ...', inject([EnsureItemGuard], (guard: EnsureItemGuard) => {
    expect(guard).toBeTruthy();
  }));
});
