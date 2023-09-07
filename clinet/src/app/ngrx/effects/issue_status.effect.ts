import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { IssueStatusService } from "src/app/services/issue-status.service";
import { IssueStatusAction } from "../actions/issue_status.action";



@Injectable()
export class IssueEffect {
  constructor(private actions$: Actions, private issueStatusService: IssueStatusService,) {}

  getIssueStatuses$ = createEffect(() => this.actions$.pipe(
    ofType(IssueStatusAction.getIssueStatuses),
    switchMap(() => this.issueStatusService.getAll()),
    map((issue_statuses) => IssueStatusAction.getIssueStatusesSuccess({ issue_statuses })),
    catchError((error) => of(IssueStatusAction.getIssueStatusesFailure({ error })))
  ))

}
