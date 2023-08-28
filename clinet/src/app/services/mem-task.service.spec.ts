import { TestBed } from '@angular/core/testing';

import { MemTaskService } from './mem-task.service';

describe('MemTaskService', () => {
  let service: MemTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
