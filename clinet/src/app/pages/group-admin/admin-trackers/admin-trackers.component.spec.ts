import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrackersComponent } from './admin-trackers.component';

describe('AdminTrackersComponent', () => {
  let component: AdminTrackersComponent;
  let fixture: ComponentFixture<AdminTrackersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrackersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
