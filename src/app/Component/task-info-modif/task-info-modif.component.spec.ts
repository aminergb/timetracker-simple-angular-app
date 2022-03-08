import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoModifComponent } from './task-info-modif.component';

describe('TaskInfoModifComponent', () => {
  let component: TaskInfoModifComponent;
  let fixture: ComponentFixture<TaskInfoModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInfoModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInfoModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
