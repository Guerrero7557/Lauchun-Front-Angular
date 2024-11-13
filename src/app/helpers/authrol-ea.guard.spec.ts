import { TestBed } from '@angular/core/testing';

import { AuthrolEAGuard } from './authrol-ea.guard';

describe('AuthrolEAGuard', () => {
  let guard: AuthrolEAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthrolEAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
