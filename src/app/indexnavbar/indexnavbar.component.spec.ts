import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IndexnavbarComponent } from './indexnavbar.component';

describe('IndexnavbarComponent', () => {
  let component: IndexnavbarComponent;
  let fixture: ComponentFixture<IndexnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ IndexnavbarComponent ],
      providers: [IndexnavbarComponent]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create checkedIfLoggedIn', () => {
    const indexNavBar: IndexnavbarComponent = TestBed.get(IndexnavbarComponent);
    expect(indexNavBar.checkIfLoggedIn).toBeTruthy();
   });

   it('should create onLogoutClick', () => {
    const indexNavBar: IndexnavbarComponent = TestBed.get(IndexnavbarComponent);
    expect(indexNavBar.onLogoutClick).toBeTruthy();
   });

   it('should create onLogoutClick', () => {
    const indexNavBar: IndexnavbarComponent = TestBed.get(IndexnavbarComponent);
    expect(indexNavBar.ngOnInit).toBeTruthy();
   });

});
