import { TestBed } from '@angular/core/testing';

import { IssuePriorityService } from './issue-priority.service';

describe('IssuePriorityService', () => {
  let service: IssuePriorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuePriorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
