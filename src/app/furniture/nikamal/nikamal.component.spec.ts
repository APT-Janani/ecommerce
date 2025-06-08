import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikamalComponent } from './nikamal.component';

describe('NikamalComponent', () => {
  let component: NikamalComponent;
  let fixture: ComponentFixture<NikamalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NikamalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikamalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
