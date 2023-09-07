import { Module } from '@nestjs/common';
import { IssuePriorityService } from './issue_priority.service';
import { IssuePriorityController } from './issue_priority.controller';

@Module({
  controllers: [IssuePriorityController],
  providers: [IssuePriorityService],
})
export class IssuePriorityModule {}
