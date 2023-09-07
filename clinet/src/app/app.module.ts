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
@NgModule({
  declarations: [AppComponent
   ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
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
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
