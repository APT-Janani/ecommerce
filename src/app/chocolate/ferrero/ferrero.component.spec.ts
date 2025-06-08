import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerreroComponent } from './ferrero.component';

describe('FerreroComponent', () => {
  let component: FerreroComponent;
  let fixture: ComponentFixture<FerreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FerreroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
