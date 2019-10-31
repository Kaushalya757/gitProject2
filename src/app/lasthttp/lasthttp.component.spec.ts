import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasthttpComponent } from './lasthttp.component';

describe('LasthttpComponent', () => {
  let component: LasthttpComponent;
  let fixture: ComponentFixture<LasthttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasthttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasthttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
