import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkComponent } from './perk.component';

describe('PerkComponent', () => {
  let component: PerkComponent;
  let fixture: ComponentFixture<PerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
