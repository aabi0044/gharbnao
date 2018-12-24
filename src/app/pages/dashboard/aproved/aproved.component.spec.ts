import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovedComponent } from './aproved.component';

describe('AprovedComponent', () => {
  let component: AprovedComponent;
  let fixture: ComponentFixture<AprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
