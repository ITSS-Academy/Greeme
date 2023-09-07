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
      ProjectEffect,
      ProjectEffect,
      GroupEffect,
    ]),
    StoreModule.forRoot({
      user: userReducer,
      auth: authReducer,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
