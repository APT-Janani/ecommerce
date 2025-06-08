import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UshaComponent } from './usha.component';

describe('UshaComponent', () => {
  let component: UshaComponent;
  let fixture: ComponentFixture<UshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UshaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
