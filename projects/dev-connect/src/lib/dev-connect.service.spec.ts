import { TestBed } from '@angular/core/testing';

import { DevConnectService } from './dev-connect.service';

describe('DevConnectService', () => {
  let service: DevConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
