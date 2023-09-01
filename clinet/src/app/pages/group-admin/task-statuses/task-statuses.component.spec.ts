import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusesComponent } from './task-statuses.component';

describe('TaskStatusesComponent', () => {
  let component: TaskStatusesComponent;
  let fixture: ComponentFixture<TaskStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStatusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
