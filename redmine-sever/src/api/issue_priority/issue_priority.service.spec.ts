import { Test, TestingModule } from '@nestjs/testing';
import { IssuePriorityService } from './issue_priority.service';

describe('IssuePriorityService', () => {
  let service: IssuePriorityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuePriorityService],
    }).compile();

    service = module.get<IssuePriorityService>(IssuePriorityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
