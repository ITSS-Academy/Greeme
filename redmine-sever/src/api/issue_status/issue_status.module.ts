import { Module } from '@nestjs/common';
import { IssueStatusService } from './issue_status.service';
import { IssueStatusController } from './issue_status.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [IssueStatusController],
  providers: [IssueStatusService],
})
export class IssueStatusModule {}
