import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisaproveComponent } from './disaprove.component';

describe('DisaproveComponent', () => {
  let component: DisaproveComponent;
  let fixture: ComponentFixture<DisaproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisaproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisaproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
