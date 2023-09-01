import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCategoriesComponent } from './issue-categories.component';

describe('IssueCategoriesComponent', () => {
  let component: IssueCategoriesComponent;
  let fixture: ComponentFixture<IssueCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
