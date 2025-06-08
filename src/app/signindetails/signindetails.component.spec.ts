import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignindetailsComponent } from './signindetails.component';

describe('SignindetailsComponent', () => {
  let component: SignindetailsComponent;
  let fixture: ComponentFixture<SignindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignindetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
