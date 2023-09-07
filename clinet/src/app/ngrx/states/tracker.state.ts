import { Tracker} from "src/app/models/tracker.model";



export interface TrackerState {
    trackers: Tracker[];
    trackerCurrent: Tracker|null;
    loading: boolean;
    error: string;
}
