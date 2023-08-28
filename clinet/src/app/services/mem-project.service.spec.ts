import { TestBed } from '@angular/core/testing';

import { MemProjectService } from './mem-project.service';

describe('MemProjectService', () => {
  let service: MemProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
