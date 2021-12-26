import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ElementRef } from "@angular/core";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  class MockElementRef implements ElementRef {
    nativeElement = {};
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, GooglePlaceModule],
      declarations: [ HomeComponent ],
      providers: [HomeComponent, ElementRef, {useValue: new MockElementRef()}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create displayRestaurantResult', () => {
    const homeComponent: HomeComponent = TestBed.get(HomeComponent);
    expect(homeComponent.displayRestaurantResult).toBeTruthy();
   });

   it('should create displayResult', () => {
    const homeComponent: HomeComponent = TestBed.get(HomeComponent);
    expect(homeComponent.displayResult).toBeTruthy();
   });

});
