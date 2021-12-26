import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ShowReviewsComponent } from './show-reviews.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


describe('ShowReviewsComponent', () => {
  let component: ShowReviewsComponent;
  let fixture: ComponentFixture<ShowReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, HttpClientTestingModule, MatDialogModule],
      declarations: [ ShowReviewsComponent ],
      providers: [ShowReviewsComponent, MatDialogRef]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create onCloseReview', () => {
    const showReviewComponent: ShowReviewsComponent = TestBed.get(ShowReviewsComponent);
    expect(showReviewComponent.onCloseReview).toBeTruthy();
    });

    it('should create OnInit', () => {
      const showReviewComponent: ShowReviewsComponent = TestBed.get(ShowReviewsComponent);
      expect(showReviewComponent.ngOnInit).toBeTruthy();
      });

});
