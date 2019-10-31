import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeshuFormComponent } from './keshu-form.component';

describe('KeshuFormComponent', () => {
  let component: KeshuFormComponent;
  let fixture: ComponentFixture<KeshuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeshuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeshuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
