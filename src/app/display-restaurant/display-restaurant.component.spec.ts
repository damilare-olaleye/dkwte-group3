import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { DisplayRestaurantComponent } from './display-restaurant.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('DisplayRestaurantComponent', () => {
  let component: DisplayRestaurantComponent;
  let fixture: ComponentFixture<DisplayRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule],
      declarations: [ DisplayRestaurantComponent ],
      providers:[DisplayRestaurantComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create onAddNewReview', () => {
    const displayRestaurant: DisplayRestaurantComponent = TestBed.get(DisplayRestaurantComponent);
    expect(displayRestaurant.onAddNewReview).toBeTruthy();
   });

   it('should create onDisplayReviews', () => {
    const displayRestaurant: DisplayRestaurantComponent = TestBed.get(DisplayRestaurantComponent);
    expect(displayRestaurant.onDisplayReviews).toBeTruthy();
   });

});
