import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { AuthAction } from "../actions/auth.action";
import { Issue } from "src/app/models/issue.model";
import { IssueService } from "src/app/services/issue.service";
import { IssueAction } from "../actions/issue.action";


@Injectable()
export class IssueEffect {
  constructor(private actions$: Actions, private issueService: IssueService, private http: HttpClient) { }

  getIssues$ = createEffect(() => this.actions$.pipe(
    ofType(IssueAction.getIssues),
    switchMap((action) => this.issueService.getAll(action.id),
    ),
    map((data) => {
      return IssueAction.getIssuesSuccess({ issues: data });
    }
    ),
    catchError((error) => {
      return of(IssueAction.getIssuesFailure({ error: error.message }));
    }
    )))
  getIssue$ = createEffect(() => this.actions$.pipe(
    ofType(IssueAction.getIssue),
    switchMap((action) => this.issueService.getOne(action.id)),
    map((data) => {
      return IssueAction.getIssueSuccess({ issue: data });
    }
    ),
    catchError((error) => {
      return of(IssueAction.getIssueFailure({ error: error.message }));
    }
    )))
  createIssue$ = createEffect(() => this.actions$.pipe(
    ofType(IssueAction.createIssue),
    switchMap((action) => this.issueService.create(action.issue)),
    map((data) => {
      return IssueAction.createIssueSuccess({ issue: data });
    }
    ),
    catchError((error) => {
      return of(IssueAction.createIssueFailure({ error: error.message }));
    }
    )))
  updateIssue$ = createEffect(() => this.actions$.pipe(
    ofType(IssueAction.updateIssue),
    switchMap((action) => this.issueService.update(action.issue)),
    map((data) => {
      return IssueAction.updateIssueSuccess();
    }
    ),
    catchError((error) => {
      return of(IssueAction.updateIssueFailure({ error: error.message }));
    }
    )))
  deleteIssue$ = createEffect(() => this.actions$.pipe(
    ofType(IssueAction.deleteIssue),
    switchMap((action) => this.issueService.delete(action.id)),
    map((data) => {
      return IssueAction.deleteIssueSuccess();
    }
    ),
    catchError((error) => {
      return of(IssueAction.deleteIssueFailure({ error: error.message }));
    }
    )))

}
