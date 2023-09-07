import { createAction, props } from "@ngrx/store";
import { Issue } from "src/app/models/issue.model";
import { IssuePriority } from "src/app/models/issue_priority.model";


export const IssuePriorityAction = {
  getIssuePriorities: createAction('[IssuePriority] Get IssuePriorities'),
  getIssuePrioritiesSuccess: createAction('[IssuePriority] Get IssuePriorities Success', props<{ issue_priorities: IssuePriority[] }>()),
  getIssuePrioritiesFailure: createAction('[IssuePriority] Get IssuePriorities Failure', props<{ error: string }>()),
}




