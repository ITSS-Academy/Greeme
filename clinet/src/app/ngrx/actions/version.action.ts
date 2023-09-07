import { createAction, props } from "@ngrx/store";
import { Issue } from "src/app/models/issue.model";
import { Version } from "src/app/models/version.model";


export const VersionAction = {
    getVersions: createAction('[Version] Get Versions'),
    getVersionsSuccess: createAction('[Version] Get Versions Success', props<{ versions: Version[] }>()),
    getVersionsFailure: createAction('[Version] Get Versions Failure', props<{ error: string }>()),
}




