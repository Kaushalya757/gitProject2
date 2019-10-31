import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandingComponent } from './banding.component';

describe('BandingComponent', () => {
  let component: BandingComponent;
  let fixture: ComponentFixture<BandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
