import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model"


export const UserAction = {
  getUsers: createAction('[User] Get Users'),
  getUsersSuccess: createAction('[User] Get Users Success', props<{ users: User[] }>()),
  getUsersFailure: createAction('[User] Get Users Failure', props<{ error: string }>()),

  getUser: createAction('[User] Get User'),
  getUserSuccess: createAction('[User] Get User Success', props<{ user: User }>()),
  getUserFailure: createAction('[User] Get User Failure', props<{ error: string }>()),

  addUser: createAction('[User] Add User'),
  addUserSuccess: createAction('[User] Add User Success', props<{ user: User }>()),
  addUserFailure: createAction('[User] Add User Failure', props<{ error: string }>()),

  updateUser: createAction('[User] Update User'),
  updateUserSuccess: createAction('[User] Update User Success', props<{ msg: string }>()),
  updateUserFailure: createAction('[User] Update User Failure', props<{ error: string }>()),

  deleteUser: createAction('[User] Delete User'),
  deleteUserSuccess: createAction('[User] Delete User Success', props<{ msg: string }>()),
  deleteUserFailure: createAction('[User] Delete User Failure', props<{ error: string }>()),
}
