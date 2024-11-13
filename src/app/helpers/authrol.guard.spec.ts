import { TestBed } from '@angular/core/testing';

import { AuthrolGuard } from './authrol.guard';

describe('AuthrolGuard', () => {
  let guard: AuthrolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthrolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
