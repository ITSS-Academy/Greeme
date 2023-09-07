import { Test, TestingModule } from '@nestjs/testing';
import { IssueStatusController } from './issue_status.controller';
import { IssueStatusService } from './issue_status.service';

describe('IssueStatusController', () => {
  let controller: IssueStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssueStatusController],
      providers: [IssueStatusService],
    }).compile();

    controller = module.get<IssueStatusController>(IssueStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
