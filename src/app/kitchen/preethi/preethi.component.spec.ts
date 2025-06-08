import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreethiComponent } from './preethi.component';

describe('PreethiComponent', () => {
  let component: PreethiComponent;
  let fixture: ComponentFixture<PreethiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreethiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
