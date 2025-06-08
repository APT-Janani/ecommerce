import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisherComponent } from './fisher.component';

describe('FisherComponent', () => {
  let component: FisherComponent;
  let fixture: ComponentFixture<FisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
