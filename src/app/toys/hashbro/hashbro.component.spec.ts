import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashbroComponent } from './hashbro.component';

describe('HashbroComponent', () => {
  let component: HashbroComponent;
  let fixture: ComponentFixture<HashbroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashbroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashbroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
