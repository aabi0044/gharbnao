import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealareaComponent } from './dealarea.component';

describe('DealareaComponent', () => {
  let component: DealareaComponent;
  let fixture: ComponentFixture<DealareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
