import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivestarComponent } from './fivestar.component';

describe('FivestarComponent', () => {
  let component: FivestarComponent;
  let fixture: ComponentFixture<FivestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivestarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
