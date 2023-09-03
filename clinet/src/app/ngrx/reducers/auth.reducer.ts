import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../states/auth.state";
import { AuthAction } from "../actions/auth.action";

const initialState: AuthState = {
    user: null,
    loading: false,
    error: '',
}
export const userReducer=createReducer(
    initialState,
    on(AuthAction.login,(state)=>({...state,loading:true})),
    on(AuthAction.loginSuccess,(state,{user})=>({...state,loading:false,user:user})),
    on(AuthAction.loginFailure,(state,{error})=>({...state,loading:false,error})),

    on(AuthAction.loginGoogle,(state)=>({...state,loading:true})),
    on(AuthAction.loginGoogleSuccess,(state,{user})=>({...state,loading:false,user:user})),
    on(AuthAction.loginGoogleFailure,(state,{error})=>({...state,loading:false,error})),

    on(AuthAction.register,(state)=>({...state,loading:true})),
    on(AuthAction.registerSuccess,(state,{user})=>({...state,loading:false,user:user})),
    on(AuthAction.registerFailure,(state,{error})=>({...state,loading:false,error})),

    on(AuthAction.logout, (state) => {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }),
    on(AuthAction.logoutSuccess, (state) => {
      return {
        ...state,
        loading: false,
        user: null,
      };
    }),
    on(AuthAction.logoutFailure, (state, { error }) => {
      return {
        ...state,
        error: error,
        loading: false,
      };
    }),
    )
