import { TestBed } from '@angular/core/testing';

import { ShowResultService } from './show-result.service';

describe('ShowResultService', () => {
  let service: ShowResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
