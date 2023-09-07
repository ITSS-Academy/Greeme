import { createAction, props } from "@ngrx/store";
import { Profile } from "../../models/profile.model"

export const ProfileAction = {
    getProfiles: createAction('[Profile] Get Profiles'),
    getProfilesSuccess: createAction('[Profile] Get Profiles Success', props<{ profiles: Profile[] }>()),
    getProfilesFailure: createAction('[Profile] Get Profiles Failure', props<{ error: string }>()),

    getProfile: createAction('[Profile] Get Profile', props<{ id: number }>()),
    getProfileSuccess: createAction('[Profile] Get Profile Success', props<{ profile: Profile }>()),
    getProfileFailure: createAction('[Profile] Get Profile Failure', props<{ error: string }>()),

    createProfile: createAction('[Profile] Create Profile', props<{ profile: Profile }>()),
    createProfileSuccess: createAction('[Profile] Create Profile Success', props<{ profile: Profile }>()),
    createProfileFailure: createAction('[Profile] Create Profile Failure', props<{ error: string }>()),

    updateProfile: createAction('[Profile] Update Profile', props<{ profile: Profile }>()),
    updateProfileSuccess: createAction('[Profile] Update Profile Success'),
    updateProfileFailure: createAction('[Profile] Update Profile Failure', props<{ error: string }>()),

    deleteProfile: createAction('[Profile] Delete Profile', props<{ id: number }>()),
    deleteProfileSuccess: createAction('[Profile] Delete Profile Success'),
    deleteProfileFailure: createAction('[Profile] Delete Profile Failure', props<{ error: string }>()),
}




