import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavensburgerComponent } from './ravensburger.component';

describe('RavensburgerComponent', () => {
  let component: RavensburgerComponent;
  let fixture: ComponentFixture<RavensburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavensburgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavensburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
