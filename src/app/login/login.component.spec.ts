import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [LoginComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ngOnInit', () => {
    const loginComponent: LoginComponent = TestBed.get(LoginComponent);
    expect(loginComponent.ngOnInit).toBeTruthy();
    });

    it('should create onButtonClick', () => {
      const loginComponent: LoginComponent = TestBed.get(LoginComponent);
      expect(loginComponent.onButtonClick).toBeTruthy();
      });

  it('should be created checkedIfLoggedIn', () => {
    const loginComponent: LoginComponent = TestBed.get(LoginComponent);
    expect(loginComponent.checkIfLoggedIn).toBeTruthy();
  });
});
