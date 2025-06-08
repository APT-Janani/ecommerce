import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepwellComponent } from './sleepwell.component';

describe('SleepwellComponent', () => {
  let component: SleepwellComponent;
  let fixture: ComponentFixture<SleepwellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleepwellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
