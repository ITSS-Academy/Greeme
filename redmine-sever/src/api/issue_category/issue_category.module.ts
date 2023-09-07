import { Module } from '@nestjs/common';
import { IssueCategoryService } from './issue_category.service';
import { IssueCategoryController } from './issue_category.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [IssueCategoryController],
  providers: [IssueCategoryService],
})
export class IssueCategoryModule {}
