import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchComponent } from './arch.component';

describe('ArchComponent', () => {
  let component: ArchComponent;
  let fixture: ComponentFixture<ArchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
