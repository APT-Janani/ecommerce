import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairymilkComponent } from './dairymilk.component';

describe('DairymilkComponent', () => {
  let component: DairymilkComponent;
  let fixture: ComponentFixture<DairymilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairymilkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairymilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
