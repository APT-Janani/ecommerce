import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagniflexComponent } from './magniflex.component';

describe('MagniflexComponent', () => {
  let component: MagniflexComponent;
  let fixture: ComponentFixture<MagniflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagniflexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagniflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
