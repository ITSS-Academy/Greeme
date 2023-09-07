import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model"
import { AuthModel } from "../../models/auth.model"

export const AuthAction = {
  login: createAction('[Auth] Login', props<{ username: string, password: string}>()),
  loginSuccess: createAction('[Auth] Login Success',),
  loginFailure: createAction('[Auth] Login Failure', props<{ error: string }>()),

  loginGoogle: createAction('[Auth] Login Google'),
  loginGoogleSuccess: createAction('[Auth] Login Google Success'),
  loginGoogleFailure: createAction('[Auth] Login Google Failure', props<{ error: string }>()),

  logout: createAction('[Auth] Logout'),
  logoutSuccess: createAction('[Auth] Logout Success'),
  logoutFailure: createAction('[Auth] Logout Failure', props<{ error: string }>()),

  logoutGoogle: createAction('[Auth] Logout Google'),
  logoutGoogleSuccess: createAction('[Auth] Logout Google Success'),
  logoutGoogleFailure: createAction('[Auth] Logout Google Failure', props<{ error: string }>()),

  register: createAction('[Auth] Register', props<{ auth : AuthModel }>()),
  registerSuccess: createAction('[Auth] Register Success'),
  registerFailure: createAction('[Auth] Register Failure', props<{ error: string }>()),
}




