import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProjectComponent } from './overview-project.component';

describe('OverviewProjectComponent', () => {
  let component: OverviewProjectComponent;
  let fixture: ComponentFixture<OverviewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
