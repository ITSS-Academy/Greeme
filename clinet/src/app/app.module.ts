import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { SharedModule } from './modules/shared.module';
import { ItemComponent } from './components/admin/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderProjectComponent } from './components/shared/header-project/header-project.component';
import { UserEffect } from './ngrx/effects/user.effect';
import { userReducer } from './ngrx/reducers/user.reducer';
@NgModule({
  declarations: [AppComponent, HeaderProjectComponent, ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    EffectsModule.forRoot([
      UserEffect
    ]),
    StoreModule.forRoot({
      user: userReducer,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
