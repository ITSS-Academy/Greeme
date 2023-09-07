import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { AuthAction } from "../actions/auth.action";


@Injectable()
export class AuthEffect {
    constructor(private actions$ : Actions,private authService:AuthService , private http:HttpClient){}

    login$=createEffect(
        ()=>this.actions$.pipe(
            ofType(AuthAction.login),
            switchMap((action)=>this.authService.login(action.username,action.password)),
            map(()=>{
                return AuthAction.loginSuccess();
            }),
            catchError((error)=>{
                return of(AuthAction.loginFailure({error: error.message}));
            }),
        )
    )

    loginWithGoogle$=createEffect(
        ()=>this.actions$.pipe(
            ofType(AuthAction.loginGoogle),
            switchMap(()=>this.authService.loginWithGoogle()),
            map((user:User)=>{
                return AuthAction.loginGoogleSuccess();
            }),
            catchError((error)=>{
                return of(AuthAction.loginGoogleFailure({error: error.message}));
            }),
        )
    )

    regiter$=createEffect(
        ()=>this.actions$.pipe(
            ofType(AuthAction.register),
            switchMap((action:any)=>this.authService.register(action.auth)),
            map(()=>{
                return AuthAction.registerSuccess();
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

    logoutGoogle$=createEffect(
        ()=>this.actions$.pipe(
            ofType(AuthAction.logoutGoogle),
            switchMap(()=>this.authService.loginWithGoogle()),
            map(()=>{
                return AuthAction.logoutGoogleSuccess();
            }
            ),
            catchError((error)=>{
                return of(AuthAction.logoutGoogleFailure({error: error.message}));
            }
            ),
        )
    )


}
