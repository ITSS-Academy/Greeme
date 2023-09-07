import { createAction, props } from "@ngrx/store";
import { Tracker } from "src/app/models/tracker.model";


export const TrackerAction = {
  getTrackers: createAction('[Tracker] Get Trackers'),
  getTrackersSuccess: createAction('[Tracker] Get trackers Success', props<{ trackers: Tracker[] }>()),
  getTrackersFailure: createAction('[Tracker] Get Trackers Failure', props<{ error: string }>()),
}




