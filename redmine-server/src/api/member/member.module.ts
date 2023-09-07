import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
