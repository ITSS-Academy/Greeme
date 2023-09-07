import { createReducer, on } from "@ngrx/store";
import { Tracker } from "src/app/models/tracker.model";
import { TrackerAction } from "../actions/tracker.action";
import { TrackerState } from "../states/tracker.state";

const initialState: TrackerState = {
  trackers: [],
  trackerCurrent: null,
  loading: false,
  error: ''
  };

export const trackerReducer = createReducer(
  initialState,
  on(TrackerAction.getTrackers, state => ({ ...state, loading: true })),
  on(TrackerAction.getTrackersSuccess, (state, { trackers }) => ({ ...state, trackers: trackers, loading: false })),
  on(TrackerAction.getTrackersFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
