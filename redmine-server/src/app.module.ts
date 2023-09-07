import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './api/profile/profile.module';
import * as dotenv from 'dotenv';
import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';
import { VersionModule } from './api/version/version.module';
import { MemberModule } from './api/member/member.module';
import { GroupModule } from './api/group/group.module';
import { IssueCategoryModule } from './api/issue_category/issue_category.module';
import { IssuePriorityModule } from './api/issue_priority/issue_priority.module';
import { IssueStatusModule } from './api/issue_status/issue_status.module';
import { TrackerModule } from './api/tracker/tracker.module';
import { IssueModule } from './api/issue/issue.module';
import { ProjectModule } from './api/project/project.module';
import { RoleModule } from './api/role/role.module';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    UserModule,
    ProfileModule,
    VersionModule,
    MemberModule,
    GroupModule,
    IssueCategoryModule,
    IssuePriorityModule,
    IssueStatusModule,
    TrackerModule,
    IssueModule,
    ProjectModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
