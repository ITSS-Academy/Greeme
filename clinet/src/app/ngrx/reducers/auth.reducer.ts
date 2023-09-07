import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../states/auth.state";
import { AuthAction } from "../actions/auth.action";

const initialState: AuthState = {
    isLogin: false,
    loading: false,
    error: '',
}
export const authReducer=createReducer(
    initialState,
    on(AuthAction.login,(state)=>({...state,loading:true})),
    on(AuthAction.loginSuccess,(state)=>({...state,loading:false, isLogin: true})),
    on(AuthAction.loginFailure,(state,{error})=>({...state,loading:false,error})),

    on(AuthAction.loginGoogle,(state)=>({...state,loading:true})),
    on(AuthAction.loginGoogleSuccess,(state)=>({...state,loading:false, isLogin: true})),
    on(AuthAction.loginGoogleFailure,(state,{error})=>({...state,loading:false,error})),

    on(AuthAction.register,(state)=>({...state,loading:true})),
    on(AuthAction.registerSuccess,(state,)=>({...state,loading:false})),
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
        isLogin: false,
        loading: false,
      };
    }),
    on(AuthAction.logoutFailure, (state, { error }) => {
      return {
        ...state,
        error: error,
        loading: false,
      };
    }),


    on(AuthAction.logoutGoogle, (state) => {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }

    ),
    on(AuthAction.logoutGoogleSuccess, (state) => {
      return {
        ...state,
        isLogin: false,
        loading: false,
      };
    }
    ),
    on(AuthAction.logoutGoogleFailure, (state, { error }) => {
      return {
        ...state,
        error: error,
        loading: false,
      };
    }
    ),


    )
