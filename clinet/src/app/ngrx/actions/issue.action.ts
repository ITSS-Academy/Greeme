import { createAction, props } from "@ngrx/store";
import { Issue } from "src/app/models/issue.model";


export const IssueAction = {
  getIssues: createAction('[Issue] Get Issues', props<{ id: number }>()),
  getIssuesSuccess: createAction('[Issue] Get Issues Success', props<{ issues: Issue[] }>()),
  getIssuesFailure: createAction('[Issue] Get Issues Failure', props<{ error: string }>()),

  getIssue: createAction('[Issue] Get Issue', props<{ id: number }>()),
  getIssueSuccess: createAction('[Issue] Get Issue Success', props<{ issue: Issue }>()),
  getIssueFailure: createAction('[Issue] Get Issue Failure', props<{ error: string }>()),

  createIssue: createAction('[Issue] Create Issue', props<{ issue: Issue }>()),
  createIssueSuccess: createAction('[Issue] Create Issue Success', props<{ issue: Issue }>()),
  createIssueFailure: createAction('[Issue] Create Issue Failure', props<{ error: string }>()),

  updateIssue: createAction('[Issue] Update Issue', props<{ issue: Issue }>()),
  updateIssueSuccess: createAction('[Issue] Update Issue Success'),
  updateIssueFailure: createAction('[Issue] Update Issue Failure', props<{ error: string }>()),

  deleteIssue: createAction('[Issue] Delete Issue', props<{ id: number }>()),
  deleteIssueSuccess: createAction('[Issue] Delete Issue Success'),
  deleteIssueFailure: createAction('[Issue] Delete Issue Failure', props<{ error: string }>()),
}




