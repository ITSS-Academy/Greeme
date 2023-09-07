import { Test, TestingModule } from '@nestjs/testing';
import { IssuePriorityController } from './issue_priority.controller';
import { IssuePriorityService } from './issue_priority.service';

describe('IssuePriorityController', () => {
  let controller: IssuePriorityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuePriorityController],
      providers: [IssuePriorityService],
    }).compile();

    controller = module.get<IssuePriorityController>(IssuePriorityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
