import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';

describe('SignupService', () => {
  let service: SignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(SignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
