import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelsComponent } from './jewels.component';

describe('JewelsComponent', () => {
  let component: JewelsComponent;
  let fixture: ComponentFixture<JewelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
