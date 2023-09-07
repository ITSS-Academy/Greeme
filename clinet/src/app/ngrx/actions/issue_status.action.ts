import { createAction, props } from "@ngrx/store";
import { IssueStatus } from "src/app/models/issue_status.model";


export const IssueStatusAction = {
  getIssueStatuses: createAction('[IssueStatus] Get IssueStatuses'),
  getIssueStatusesSuccess: createAction('[IssueStatus] Get IssueStatuses Success', props<{ issue_statuses: IssueStatus[] }>()),
  getIssueStatusesFailure: createAction('[IssueStatus] Get IssueStatuses Failure', props<{ error: string }>()),

}




