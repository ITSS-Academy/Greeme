import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { UserAction } from "../actions/user.action";
import { UserService } from "src/app/services/user.service";


@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService, private http: HttpClient) { }
  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserAction.getUsers),
    switchMap((action) => this.userService.getAll()),
    map((data) => {
      return UserAction.getUsersSuccess(data);
    }),
    catchError((error) => {
      return of(UserAction.getUserFailure({ error: error.message }));
    }),
  ))
  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserAction.getUser),
    switchMap((action) => this.userService.getOne(action.id)),
    map((data) => {
      return UserAction.getUserSuccess({ user: data });
    }),
    catchError((error) => {
      return of(UserAction.getUserFailure({ error: error.message }));
    })))

  addUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserAction.addUser),
    switchMap((action) => this.userService.create(action.user)),
    map((data) => {
      return UserAction.addUserSuccess({ user: data });
    }
    ),
    catchError((error) => {
      return of(UserAction.addUserFailure({ error: error.message }));
    }
    )))
  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserAction.updateUser),
    switchMap((action) => this.userService.update(action.user)),
    map((data) => {
      return UserAction.updateUserSuccess({ msg: data });
    }
    ),
    catchError((error) => {
      return of(UserAction.updateUserFailure({ error: error.message }));
    }
    )))

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserAction.deleteUser),
    switchMap((action) => this.userService.delete(action.id)),
    map((data) => {
      return UserAction.deleteUserSuccess({ msg: data });
    }
    ),
    catchError((error) => {
      return of(UserAction.deleteUserFailure({ error: error.message }));
    }
    )))


}
