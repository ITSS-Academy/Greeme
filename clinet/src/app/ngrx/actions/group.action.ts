import { createAction, props } from "@ngrx/store";
import { Group } from "src/app/models/group.model";
import { Issue } from "src/app/models/issue.model";


export const GroupAction = {
  getGroups: createAction('[Group] Get Groups'),
  getGroupsSuccess: createAction('[Group] Get Groups Success', props<{ groups: Group[] }>()),
  getGroupsFailure: createAction('[Group] Get Groups Failure', props<{ error: any }>()),
}




