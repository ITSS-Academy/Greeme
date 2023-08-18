import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { SharedModule } from './modules/shared.module';
import { KanbanComponent } from './components/project/kanban/kanban.component';
import { ItemComponent } from './components/admin/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
