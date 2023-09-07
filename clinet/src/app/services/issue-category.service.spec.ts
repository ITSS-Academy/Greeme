import { TestBed } from '@angular/core/testing';

import { IssueCategoryService } from './issue-category.service';

describe('IssueCategoryService', () => {
  let service: IssueCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
