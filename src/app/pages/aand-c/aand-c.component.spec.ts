import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AandCComponent } from './aand-c.component';

describe('AandCComponent', () => {
  let component: AandCComponent;
  let fixture: ComponentFixture<AandCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AandCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AandCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
