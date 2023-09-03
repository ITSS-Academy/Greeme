import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model"
import { Auth } from "../../models/auth.model"

export const AuthAction = {
  login: createAction('[Auth] Login', props<{ username: string, password: string}>()),
  loginSuccess: createAction('[Auth] Login Success', props<{ user: User }>()),
  loginFailure: createAction('[Auth] Login Failure', props<{ error: string }>()),

  loginGoogle: createAction('[Auth] Login Google'),
  loginGoogleSuccess: createAction('[Auth] Login Google Success', props<{ user: User }>()),
  loginGoogleFailure: createAction('[Auth] Login Google Failure', props<{ error: string }>()),

  logout: createAction('[Auth] Logout'),
  logoutSuccess: createAction('[Auth] Logout Success'),
  logoutFailure: createAction('[Auth] Logout Failure', props<{ error: string }>()),

  register: createAction('[Auth] Register', props<{ auth : Auth }>()),
  registerSuccess: createAction('[Auth] Register Success', props<{ user: User }>()),
  registerFailure: createAction('[Auth] Register Failure', props<{ error: string }>()),
}




