import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemanagementComponent } from './profilemanagement.component';

describe('ProfilemanagementComponent', () => {
  let component: ProfilemanagementComponent;
  let fixture: ComponentFixture<ProfilemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
