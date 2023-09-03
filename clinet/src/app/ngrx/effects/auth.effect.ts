import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { AuthAction } from "../actions/auth.action";


@Injectable()
export class UserEffect {
    constructor(private actions$ : Actions,private authService:AuthService , private http:HttpClient){}

    login$=createEffect(
        ()=>this.actions$.pipe(
            ofType(AuthAction.login),
            switchMap((action)=>this.authService.login(action.username,action.password)),
            map((user:User)=>{
                return AuthAction.loginSuccess({user: user});
            }),
            catchError((error)=>{
                return of(AuthAction.loginFailure({error: error.message}));
            }),
        )
    )

    // loginWithGoogle$=createEffect(
    //     ()=>this.actions$.pipe(
    //         ofType(AuthAction.loginGoogle),
    //         switchMap(()=>this.authService.loginWithGoogle()),
    //         map((user:User)=>{
    //             return AuthAction.loginGoogleSuccess({user: user});
    //         }),
    //         catchError((error)=>{
    //             return of(AuthAction.loginGoogleFailure({error: error.message}));
    //         }),
    //     )
    // )

    regiter$=createEffect(
        ()=>this.actions$.pipe(
            ofType(AuthAction.register),
            switchMap((action:any)=>this.authService.register(action.auth)),
            map((user)=>{
                return AuthAction.registerSuccess({user: user});
            }),
            catchError((error)=>{
                return of(AuthAction.registerFailure({error: error.message}));
            }),
        )
    )

    logout$=createEffect(
        ()=>this.actions$.pipe(
            ofType(AuthAction.logout),
            switchMap(()=>this.authService.logout()),
            map(()=>{
                return AuthAction.logoutSuccess();
            }),
            catchError((error)=>{
                return of(AuthAction.logoutFailure({error: error.message}));
            }),
        )
    )

    // getUser$=createEffect(
    //     ()=>this.actions$.pipe(
    //         ofType(UserActions.login),
    //         switchMap(()=>this.authService.loginWithGoogle()),
    //         map((user)=>{
    //             return UserActions.loginSuccess({user: user});
    //         }),
    //         catchError((error)=>{
    //             return of(UserActions.loginFailure({error: error.message}));
    //         }),
    //     )
    // )
    // logout$ = createEffect(() =>
    // this.actions$.pipe(
    //   ofType(UserActions.logout),
    //   switchMap(() => this.authService.logoutWithGoogle()),
    //   map(() => {
    //     // this.route.navigate(['/']);
    //     return UserActions.logoutSuccess();
    //   }),
    //   catchError((error) => of(UserActions.logoutFailure({ error })))
    // )
  // );

}
