import { createReducer, on } from "@ngrx/store";

import { VersionState } from "../states/version.state";
import { VersionAction } from "../actions/version.action";


const initialState: VersionState = {
  versions: [],
  versionCurrent: null,
  loading: false,
  error: '',
}

export const versionReducer = createReducer(
  initialState,
  on(VersionAction.getVersions, state => ({ ...state, loading: true })),
  on(VersionAction.getVersionsSuccess, (state, { versions }) => ({ ...state, versions: versions, loading: false })),
  on(VersionAction.getVersionsFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
