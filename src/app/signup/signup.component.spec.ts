import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ SignupComponent ],
      providers: [SignupComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create checkedIfLoggedIn', () => {
    const signupComponent: SignupComponent = TestBed.get(SignupComponent);
    expect(signupComponent.checkIfLoggedIn).toBeTruthy();
   });

   it('should create onInit', () => {
    const signupComponent: SignupComponent = TestBed.get(SignupComponent);
    expect(signupComponent.ngOnInit).toBeTruthy();
   });

   it('should create onButtonClick', () => {
    const signupComponent: SignupComponent = TestBed.get(SignupComponent);
    expect(signupComponent.onButtonClick).toBeTruthy();
   });

});
