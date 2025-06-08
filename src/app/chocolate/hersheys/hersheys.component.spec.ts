import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HersheysComponent } from './hersheys.component';

describe('HersheysComponent', () => {
  let component: HersheysComponent;
  let fixture: ComponentFixture<HersheysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HersheysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HersheysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
