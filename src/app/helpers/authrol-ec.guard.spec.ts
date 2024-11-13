import { TestBed } from '@angular/core/testing';

import { AuthrolEcGuard } from './authrol-ec.guard';

describe('AuthrolEcGuard', () => {
  let guard: AuthrolEcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthrolEcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
