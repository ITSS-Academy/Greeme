import { Module } from '@nestjs/common';
import { IssuePriorityService } from './issue_priority.service';
import { IssuePriorityController } from './issue_priority.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [IssuePriorityController],
  providers: [IssuePriorityService],
})
export class IssuePriorityModule {}
