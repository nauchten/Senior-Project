import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => { // Specifies we are testing the login component
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => { // This code creates a version of our Angular application that can be used alongside
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => { // This code creates a version of our Angular application that can be used alongside Jasmine for testing
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { // Testing to see if Angular creates the component
    expect(component).toBeTruthy();
  });
});
