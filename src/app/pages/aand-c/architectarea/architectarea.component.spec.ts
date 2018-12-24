import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectareaComponent } from './architectarea.component';

describe('ArchitectareaComponent', () => {
  let component: ArchitectareaComponent;
  let fixture: ComponentFixture<ArchitectareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
