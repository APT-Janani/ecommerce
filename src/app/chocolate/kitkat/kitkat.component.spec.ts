import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitkatComponent } from './kitkat.component';

describe('KitkatComponent', () => {
  let component: KitkatComponent;
  let fixture: ComponentFixture<KitkatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitkatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
