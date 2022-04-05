import { TestBed } from '@angular/core/testing';

import { AkSkeltonService } from './ak-skelton.service';

describe('AkSkeltonService', () => {
  let service: AkSkeltonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkSkeltonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
