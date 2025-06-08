import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderjoyComponent } from './kinderjoy.component';

describe('KinderjoyComponent', () => {
  let component: KinderjoyComponent;
  let fixture: ComponentFixture<KinderjoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KinderjoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KinderjoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
