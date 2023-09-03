import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingProjectComponent } from './setting-project.component';

describe('SettingProjectComponent', () => {
  let component: SettingProjectComponent;
  let fixture: ComponentFixture<SettingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
