import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DeleteReviewsService } from './delete-reviews.service';

describe('DeleteReviewsService', () => {
  let service: DeleteReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(DeleteReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
