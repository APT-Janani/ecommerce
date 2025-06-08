import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnsonComponent } from './johnson.component';

describe('JohnsonComponent', () => {
  let component: JohnsonComponent;
  let fixture: ComponentFixture<JohnsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohnsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JohnsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
