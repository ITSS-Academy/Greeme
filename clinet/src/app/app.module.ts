import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, Auth } from '@angular/fire/auth';
import { SharedModule } from './modules/shared.module';
import { ItemComponent } from './components/admin/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UserEffect } from './ngrx/effects/user.effect';
import { userReducer } from './ngrx/reducers/user.reducer';
import { authReducer } from './ngrx/reducers/auth.reducer';
import { AuthEffect } from './ngrx/effects/auth.effect';
import { ProjectEffect } from './ngrx/effects/project.effect';
import { GroupEffect } from './ngrx/effects/group.effect';
import { IssueCategoryEffect } from './ngrx/effects/issue_category.effect';
import { IssuePriorityEffect } from './ngrx/effects/issue_priority.effect';
import { IssueStatusEffect } from './ngrx/effects/issue_status.effect';
import { IssueEffect } from './ngrx/effects/issue.effect';
import { MemberEffect } from './ngrx/effects/member.effect';
import { ProfileEffect } from './ngrx/effects/profile.effect';
import { TrackerEffect } from './ngrx/effects/tracker.effect';
import { VersionEffect } from './ngrx/effects/version.effect';
import { issueCategoryReducer } from './ngrx/reducers/issue_category.reducer';
import { groupReducer } from './ngrx/reducers/group.reducer';
import { issuePriorityReducer } from './ngrx/reducers/issue_priority.reducer';
import { issueStatusReducer } from './ngrx/reducers/issue_status.reducer';
import { issueReducer } from './ngrx/reducers/issue.reducer';
import { memberReducer } from './ngrx/reducers/menber.reducer';
import { projectReducer } from './ngrx/reducers/project.reducer';
import { profileReducer } from './ngrx/reducers/profile.reducer';
import { trackerReducer } from './ngrx/reducers/tracker.reducer';
import { versionReducer } from './ngrx/reducers/version.reducer';
import { JwtModule } from '@auth0/angular-jwt';
@NgModule({
  declarations: [AppComponent
   ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('accessToken')
      }
    }),
    EffectsModule.forRoot([
      UserEffect,
      AuthEffect,
      GroupEffect,
      IssueCategoryEffect,
      IssuePriorityEffect,
      IssueStatusEffect,
      IssueEffect,
      MemberEffect,
      ProjectEffect,
      ProfileEffect,
      TrackerEffect,
      VersionEffect,
    ]),
    StoreModule.forRoot({
      user: userReducer,
      auth: authReducer,
      issueCategory: issueCategoryReducer,
      group: groupReducer,
      issuePriority: issuePriorityReducer,
      issueStatus: issueStatusReducer,
      issue: issueReducer,
      member: memberReducer,
      project: projectReducer,
      profile: profileReducer,
      tracker: trackerReducer,
      version: versionReducer,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
