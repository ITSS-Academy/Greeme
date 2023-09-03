import { createReducer, on } from "@ngrx/store";
import { UserState } from "../states/user.state";
import { UserAction } from '../actions/user.action';


const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: '',
}
export const userReducer = createReducer(
  initialState,
  on(UserAction.getUsers, (state) => ({ ...state, loading: true })),
  on(UserAction.getUsersSuccess, (state, { users }) => ({ ...state, loading: false, users: users })),
  on(UserAction.getUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserAction.getUser, (state) => ({ ...state, loading: true })),
  on(UserAction.getUserSuccess, (state, { user }) => ({ ...state, loading: false, user: user })),
  on(UserAction.getUserFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserAction.addUser, (state) => ({ ...state, loading: true })),
  on(UserAction.addUserSuccess, (state, { user }) => ({ ...state, loading: false })),
  on(UserAction.addUserFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserAction.updateUser, (state) => ({ ...state, loading: true })),
  on(UserAction.updateUserSuccess, (state, { msg }) => ({ ...state, loading: false })),
  on(UserAction.updateUserFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserAction.deleteUser, (state) => ({ ...state, loading: true })),
  on(UserAction.deleteUserSuccess, (state, { msg }) => ({ ...state, loading: false })),
  on(UserAction.deleteUserFailure, (state, { error }) => ({ ...state, loading: false, error })),
)
