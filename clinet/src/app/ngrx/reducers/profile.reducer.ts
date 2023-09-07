import { createReducer, on } from "@ngrx/store";
import { Profile } from "src/app/models/profile.model";
import { ProfileState } from "../states/profile.state";
import { ProfileAction } from "../actions/profile.action";

const initialState: ProfileState = {
  profiles: [],
  profileCurrent: null,
  loading: false,
  error: ''
}

export const profileReducer = createReducer(
  initialState,
  on(ProfileAction.getProfiles, state => ({ ...state, loading: true })),
  on(ProfileAction.getProfilesSuccess, (state, { profiles }) => ({ ...state, profiles, loading: false })),
  on(ProfileAction.getProfilesFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProfileAction.getProfile, state => ({ ...state, loading: true })),
  on(ProfileAction.getProfileSuccess, (state, { profile }) => ({ ...state, profileCurrent: profile, loading: false })),
  on(ProfileAction.getProfileFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProfileAction.createProfile, state => ({ ...state, loading: true })),
  on(ProfileAction.createProfileSuccess, (state, { profile }) => ({ ...state, profiles: [...state.profiles, profile], loading: false })),
  on(ProfileAction.createProfileFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProfileAction.updateProfile, state => ({ ...state, loading: true })),
  on(ProfileAction.updateProfileSuccess, state => ({ ...state, loading: false })),
  on(ProfileAction.updateProfileFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProfileAction.deleteProfile, state => ({ ...state, loading: true })),
  on(ProfileAction.deleteProfileSuccess, state => ({ ...state, loading: false })),
  on(ProfileAction.deleteProfileFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
