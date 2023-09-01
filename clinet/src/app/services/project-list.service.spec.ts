import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project-list.service';

describe('ProjectListService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
