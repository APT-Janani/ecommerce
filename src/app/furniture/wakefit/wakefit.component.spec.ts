import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakefitComponent } from './wakefit.component';

describe('WakefitComponent', () => {
  let component: WakefitComponent;
  let fixture: ComponentFixture<WakefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WakefitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WakefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
