import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { AuthAction } from "../actions/auth.action";
import { ProfileService } from "src/app/services/profile.service";
import { ProfileAction } from "../actions/profile.action";


@Injectable()
export class ProfileEffect {
  constructor(private actions$: Actions, private profileService: ProfileService, private http: HttpClient) { }

  getPofiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileAction.getProfiles),
    switchMap(() => this.profileService.getAll(),
    ),
    map((data) => {
      return ProfileAction.getProfilesSuccess({ profiles: data });
    }
    ),
    catchError((error) => {
      return of(ProfileAction.getProfilesFailure({ error: error.message }));
    }
    )))

  getProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileAction.getProfile),
    switchMap((action) => this.profileService.getOne(action.id)),
    map((data) => {
      return ProfileAction.getProfileSuccess({ profile: data });
    }
    ),
    catchError((error) => {
      return of(ProfileAction.getProfileFailure({ error: error.message }));
    }
    )))

  createProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileAction.createProfile),
    switchMap((action) => this.profileService.create(action.profile)),
    map((data) => {
      return ProfileAction.createProfileSuccess({ profile: data });
    }
    ),
    catchError((error) => {
      return of(ProfileAction.createProfileFailure({ error: error.message }));
    }
    )))

  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileAction.updateProfile),
    switchMap((action) => this.profileService.update(action.profile)),
    map((data) => {
      return ProfileAction.updateProfileSuccess();
    }
    ),
    catchError((error) => {
      return of(ProfileAction.updateProfileFailure({ error: error.message }));
    }
    )))

  deleteProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileAction.deleteProfile),
    switchMap((action) => this.profileService.delete(action.id)),
    map((data) => {
      return ProfileAction.deleteProfileSuccess();
    }
    ),
    catchError((error) => {
      return of(ProfileAction.deleteProfileFailure({ error: error.message }));
    }
    )))




}
